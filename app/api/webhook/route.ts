import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const eventData = req.body; // Process the incoming webhook data
        
        console.log("Received Webhook Event:", eventData);

        // TODO: Add logic to process the event, e.g., updating your database
        return NextResponse.json({error: 'Webhook received successfully'}, {status: 200})
    } catch (error) {
        console.error("Webhook Error:", error);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}
