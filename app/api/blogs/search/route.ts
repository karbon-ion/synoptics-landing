import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') || '';
    const generate_mode = url.searchParams.get('generate_mode') || 'list';
    
    const apiUrl = new URL('https://ask.synoptix.ai/ask');
    apiUrl.searchParams.append('query', query);
    apiUrl.searchParams.append('generate_mode', generate_mode);
    apiUrl.searchParams.append('site', 'all');
    
    console.log('Fetching from Synoptix API:', apiUrl.toString());
    
    // Create a controller with a longer timeout (15 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    
    try {
      const response = await fetch(apiUrl.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'text/event-stream'
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // For non-OK responses, return a mock response
      if (!response.ok) {
        console.log(`API returned error status: ${response.status} ${response.statusText}`);
        return NextResponse.json({
          results: [],
          error: `API returned status ${response.status}`,
          query,
          generate_mode
        });
      }
      
      const data = await response.text();
      console.log('Response received, length:', data.length);
      
      // Process the event-stream data
      const eventLines = data.split('\n').filter(line => line.trim() !== '');
      const events = [];
      
      for (const line of eventLines) {
        if (line.startsWith('data: ')) {
          try {
            const jsonStr = line.substring(6); // Remove 'data: ' prefix
            const eventData = JSON.parse(jsonStr);
            events.push(eventData);
          } catch (e) {
            console.log('Failed to parse event data:', line);
          }
        }
      }
      
      // Process the events based on their types
      const results = [];
      let header = null;
      let summary = null;
      
      for (const event of events) {
        if (event.message_type === 'result_batch' && event.results) {
          results.push(...event.results);
        } else if (event.message_type === 'header') {
          header = event;
        } else if (event.message_type === 'summary') {
          summary = event;
        }
      }
      
      // Construct the final response
      const finalResponse = {
        summary: summary ? summary.message : null,
        results: results,
        query,
        generate_mode,
        header: header ? header.header_value : null
      };
      
      return NextResponse.json(finalResponse);
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Fetch error:', error);
      
      // Return a mock response on error
      return NextResponse.json({
        results: [],
        error: error instanceof Error ? error.message : 'Failed to fetch from API',
        query,
        generate_mode
      });
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
