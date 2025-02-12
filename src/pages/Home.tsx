import React from 'react';
import { ArrowRight, Notebook as Robot, Code, Gift, Users, Megaphone, BarChart } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent dark:from-primary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Accelerate your journey towards an empowered future
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                At Revino Solutions Pvt. Ltd., we deliver innovative digital transformation services, including AI automation, custom app development, marketing loyalty programs, and enterprise gifting solutions. With a client-first approach and expert team, we help businesses drive engagement, boost efficiency, and maximize ROI in a new digital era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full 
                           text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300
                           shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800"
                alt="Digital Transformation"
                className="relative rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="hero-title text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enhance efficiency with our automation, development, and gifting solutions tailored for your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Automation',
                description: 'Streamline tasks, optimize workflows, and boost efficiency with intelligent, data-driven solutions.',
                icon: Robot,
                link: '/ai-automation'
              },
              {
                title: 'Digital Transformation',
                description: 'Empower businesses with technology to innovate, optimize operations, and enhance customer experiences.',
                icon: Code,
                link: '/digital-transformation'
              },
              {
                title: 'Rewards Hub',
                description: 'One-stop solution for Gift Vouchers, Merchandising, Swag & Gifting solutions.',
                icon: Gift,
                link: '/rewards-hub'
              },
              {
                title: 'Loyalty',
                description: 'QR Code solutions for lead engagement, customer feedback and more.',
                icon: Users,
                link: '/loyalty'
              },
              {
                title: 'Marketing',
                description: 'SEO, PPC, SMM Boost, Content Strategy & CRM.',
                icon: Megaphone,
                link: '/marketing'
              },
              {
                title: 'Custom Web & App Development',
                description: 'Custom-tailored digital solutions to achieve functionality, scalability, and user experience.',
                icon: BarChart,
                link: '/digital-transformation'
              },
            ].map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="group service-card"
              >
                <div className="service-icon">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent dark:from-accent/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="hero-title text-3xl md:text-4xl font-bold mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Revino caters to a diverse range of industries, including:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Retail & E-commerce',
                  'Banking & Finance',
                  'Healthcare',
                  'Education',
                  'Manufacturing',
                  'FMCG',
                  'NGOs',
                  'Automotive'
                ].map((industry, index) => (
                  <div key={index} 
                       className="group flex items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 
                                backdrop-blur-sm border border-gray-100 dark:border-gray-700
                                hover:shadow-md transition-all duration-300">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 transform group-hover:translate-x-1 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300">{industry}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-600 dark:text-gray-300">
                Our solutions are adaptable, ensuring every industry can leverage our expertise for maximum impact.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Industries We Serve"
                className="relative rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}