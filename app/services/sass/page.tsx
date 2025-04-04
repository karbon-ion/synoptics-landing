import Image from "next/image";
import f1 from '@/public/features1.png';


export default ()=> (
    <section className="py-20 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
          Synoptix AI Software as a service
        </h2>
      </div>
      {[
            {
              title: "Design & Deploy Scalable SaaS Solutions",
              subtitle: "CUSTOM SaaS PLATFORM",
              description: "From simple applications to enterprise-grade solutions, Synoptix's SaaS platform lets you design, deploy, and scale seamlessly. Build custom SaaS solutions tailored to your business needs—without the complexity of traditional development.",
              image: f1,
              ctaText: "Learn More",
              ctaLink: "/services/sass"
            },
      ].map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center mb-24 last:mb-0`}
        >
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden ">
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">
                {feature.subtitle}
              </span>
              <h3 className="mt-2 text-3xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {feature.description}
              </p>
              {/* <Link
                href={feature.ctaLink}
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {feature.ctaText}
              </Link> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)