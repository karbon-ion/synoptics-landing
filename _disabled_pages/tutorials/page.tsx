

// export const metadata = {
//   robots: 'noindex',
// };

// import Image from 'next/image';
// import Link from 'next/link';

// const tutorialVideos = [
//   {
//     id: 1,
//     title: 'Getting Started with Synoptics RAG',
//     description: 'Learn how to set up and configure your first Retrieval Augmented Generation system with our step-by-step guide.',
//     image: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1000',
//     duration: '12:45',
//     date: 'April 5, 2025',
//     category: 'Beginners'
//   },
//   {
//     id: 2,
//     title: 'Fine-Tuning LLMs for Business Use Cases',
//     description: 'A comprehensive tutorial on customizing large language models for specific business applications and workflows.',
//     image: 'https://images.unsplash.com/photo-1581089778245-3ce67677f718?q=80&w=1000',
//     duration: '18:30',
//     date: 'March 30, 2025',
//     category: 'Advanced'
//   },
//   {
//     id: 3,
//     title: 'Implementing AI Workflows in Enterprise',
//     description: 'Discover how to integrate AI-powered workflows into your existing enterprise systems for maximum efficiency.',
//     image: 'https://images.unsplash.com/photo-1581092335397-9fa73b9a0abb?q=80&w=1000',
//     duration: '15:20',
//     date: 'March 22, 2025',
//     category: 'Intermediate'
//   },
//   {
//     id: 4,
//     title: 'Building Custom AI Agents with Synoptics',
//     description: 'Step-by-step guide to creating specialized AI agents that can automate complex tasks in your organization.',
//     image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000',
//     duration: '22:15',
//     date: 'March 15, 2025',
//     category: 'Advanced'
//   },
//   {
//     id: 5,
//     title: 'Data Preparation for RAG Systems',
//     description: 'Learn best practices for preparing and structuring your data to get optimal results from your RAG implementation.',
//     image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
//     duration: '14:50',
//     date: 'March 8, 2025',
//     category: 'Intermediate'
//   },
//   {
//     id: 6,
//     title: 'Synoptics Platform Overview',
//     description: 'A complete walkthrough of the Synoptics platform features and capabilities for new users.',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
//     duration: '10:30',
//     date: 'February 28, 2025',
//     category: 'Beginners'
//   }
// ];

// const TutorialsPage = () => {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">
//             VIDEO TUTORIALS
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8 max-w-4xl mx-auto">
//             Learn AI Implementation with Our Tutorials
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//           Explore our collection of video tutorials designed to help you master AI technologies and implement them effectively in your organisation.
//           </p>
//           <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
//         </div>
//       </div>

//       {/* Tutorials Grid Section */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Tutorials Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {tutorialVideos.map((video) => (
//               <div 
//                 key={video.id}
//                 className="group bg-white rounded-[32px] border border-[rgba(66,153,225,0.2)] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
//               >
//                 <div className="relative h-56 w-full overflow-hidden">
//                   <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
//                     {video.category}
//                   </div>
//                   <Image
//                     src={video.image}
//                     alt={video.title}
//                     fill
//                     unoptimized
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {/* Play Button Overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-blue-500 bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
//                       <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </div>
//                   {/* Duration Badge */}
//                   <div className="absolute bottom-4 left-4 z-10 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md flex items-center">
//                     <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
//                     </svg>
//                     {video.duration}
//                   </div>
//                 </div>
//                 <div className="p-8 flex-grow flex flex-col">
//                   <div className="text-blue-400 text-sm mb-2">{video.date}</div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                     {video.title}
//                   </h3>
//                   <p className="text-gray-600 text-base leading-relaxed mb-6">
//                     {video.description}
//                   </p>
//                   <div className="mt-auto">
//                     <Link 
//                       href={`/tutorials/${video.id}`}
//                       className="inline-flex items-center text-blue-500 font-medium group-hover:text-blue-700 transition-colors duration-300"
//                     >
//                       Watch Tutorial
//                       <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Skill Level Filter */}
//           {/* <div className="bg-blue-50 rounded-[32px] p-12 text-center max-w-4xl mx-auto mb-16">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Find Tutorials by Skill Level
//             </h3>
//             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//               Browse our tutorial collection based on your experience level with AI technologies.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="px-6 py-3 text-white bg-gradient-to-r from-green-400 to-green-600 rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
//                 Beginners
//               </button>
//               <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
//                 Intermediate
//               </button>
//               <button className="px-6 py-3 text-white bg-gradient-to-r from-purple-400 to-purple-600 rounded-full hover:from-purple-500 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
//                 Advanced
//               </button>
//             </div>
//           </div> */}

//           {/* Request Tutorial Section */}
//           <div className="bg-gray-50 rounded-[32px] p-12 text-center max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Can't Find What You're Looking For?
//             </h3>
//             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//               Request a tutorial on a specific topic and our team will consider creating it for our community.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
//               <input
//                 type="text"
//                 placeholder="Suggest a tutorial topic"
//                 className="flex-grow px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button className="px-8 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
//                 Submit Request
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TutorialsPage;
