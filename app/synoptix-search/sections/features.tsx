'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl shadow-md rounded-xl">
        <h2 className="text-center text-3xl font-bold mb-8" style={{fontFamily: "Syne",fontWeight:700,fontSize:"36px",lineHeight:"45px"}}>
          High Level <span className="text-blue-600">Search Functions</span>
        </h2>
        
        {/* Universal Knowledge Section */}
        <div className=" rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center items-center">
              <div className="relative w-full h-auto">
                <Image 
                  src="/synoptix-search/functions/universal-knowledge.png" 
                  alt="Universal Knowledge" 
                  width={400} 
                  height={300} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="p-15">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: "Syne",fontWeight:700,fontSize:"26px",lineHeight:"45px"}}>
                Universal Knowledge
              </h3>
              <span style={{fontFamily: "Syne",fontWeight:400,fontSize:"14px",lineHeight:"17px",letterSpacing:"0.4px"}}>
                
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Bring together all your tools and content into a single search experience
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Find anything you need regardless of where it's stored or what format it's in
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Get the right information at the right time without having to switch between apps
                  </p>
                </li>
              </ul>
              </span>
            </div>
          </div>
        </div>
        
        {/* Data Insights Section */}
        <div className="rounded-xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="p-15">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: "Syne",fontWeight:700,fontSize:"26px",lineHeight:"45px"}}>
                Data Insights
              </h3>
              <span style={{fontFamily: "Syne",fontWeight:400,fontSize:"14px",lineHeight:"17px",letterSpacing:"0.4px"}}>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Analyze usage patterns to better understand what information your team needs most
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Identify knowledge gaps and content that needs updating or archiving
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Track search performance and optimize for better results over time
                  </p>
                </li>
              </ul>
              </span>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="relative w-full h-auto">
                <Image 
                  src="/synoptix-search/functions/data-insights.png" 
                  alt="Data Insights" 
                  width={400} 
                  height={300} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Enterprise Data Search Section */}
        <div className="rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex justify-center items-center">
              <div className="relative w-full h-auto">
                <Image 
                  src="/synoptix-search/functions/enterprise-data-search.png" 
                  alt="Enterprise Data Search" 
                  width={400} 
                  height={300} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="p-15">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: "Syne",fontWeight:700,fontSize:"26px",lineHeight:"45px"}}>
                Enterprise Data Search
              </h3>
              <span style={{fontFamily: "Syne",fontWeight:400,fontSize:"14px",lineHeight:"17px",letterSpacing:"0.4px"}}>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Securely search across all your enterprise data sources with proper access controls
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Connect to databases, APIs, and internal systems for comprehensive search
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Find structured and unstructured data with the same simple interface
                  </p>
                </li>
              </ul>
              </span>
            </div>
          </div>
        </div>
        
        {/* Fine-Tuning/Industry Specific Section */}
        <div className="rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="p-15">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: "Syne",fontWeight:700,fontSize:"26px",lineHeight:"45px"}}>
                Fine-Tuning/Industry Specific
              </h3>
              <span style={{fontFamily: "Syne",fontWeight:400,fontSize:"14px",lineHeight:"17px",letterSpacing:"0.4px"}}>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Customize search for your specific industry terminology and knowledge domains
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Train models on your proprietary data to improve relevance and accuracy
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 mt-1 mr-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                  <p className="text-sm">
                    Create specialized search experiences for different departments and use cases
                  </p>
                </li>
              </ul>
              </span>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="relative w-full h-auto">
                <Image 
                  src="/synoptix-search/functions/fine-tuning.png" 
                  alt="Fine-Tuning/Industry Specific" 
                  width={400} 
                  height={300} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
