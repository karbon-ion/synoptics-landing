'use client';

import Image from 'next/image';

const IntroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI Technology Visualization"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Work Smarter with Synoptix Consulting
            </h2>

            <p className="text-gray-600 text-lg">
              Struggling with inefficiencies, manual processes, and disconnected tech footprints. Consulting helps you integrate AI strategically—eliminating roadblocks, automating workflows, and driving smarter decisions.
            </p>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AI solutions built for your business, not off-the-shelf tools.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Expert guidance for seamless integration and real results.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Secure, scalable strategies that grow with you.</span>
              </li>
            </ul>

            <div className="space-y-4">
              <p className="text-gray-600">
                Synoptix Consulting helps you adopt AI the right way—and make it work for you. AI shouldn't be complicated. It should be a strategic advantage.
              </p>
              <p className="text-gray-600 font-medium">
                Let's make it work for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
