import React, { useState } from 'react';
import { Code, Laptop, Cloud, Shield, Smartphone, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function DigitalTransformation() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent dark:from-primary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Custom Web & Mobile App Solutions
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Professional web and app development tailored for success, security, and user experience.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="flex-1 p-6 bg-white rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-sm text-gray-600">Projects Delivered</p>
                </div>
                <div className="flex-1 p-6 bg-white rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Web Development"
                className="relative rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="hero-title text-3xl font-bold mb-6">Our Development Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive web and mobile development solutions for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Website Development',
                description: 'Custom-built, responsive, and SEO-optimized websites.',
                technologies: 'React.js, Next.js, Node.js, Express.js, MongoDB, MySQL',
                industry: 'Web Development'
              },
              {
                title: 'E-commerce Solutions',
                description: 'Scalable e-commerce platforms with secure payment integration.',
                technologies: 'Shopify, WooCommerce, Magento',
                industry: 'E-commerce'
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform apps for seamless mobile experiences.',
                technologies: 'Flutter, React Native, Swift',
                industry: 'Mobile Apps'
              },
              {
                title: 'Cloud Solutions & DevOps',
                description: 'High-performance cloud infrastructure and deployment solutions.',
                technologies: 'AWS, Microsoft Azure, Docker, Kubernetes, Jenkins',
                industry: 'Cloud Computing'
              },
              {
                title: 'Database Management',
                description: 'Secure and optimized database solutions for your applications.',
                technologies: 'MySQL, PostgreSQL, MongoDB, Firebase, Redis',
                industry: 'Database'
              },
              {
                title: 'WhatsApp Bot',
                description: 'Custom WhatsApp bot for automated customer engagement and support.',
                technologies: 'WhatsApp Business API, Node.js',
                industry: 'Automation'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-2xl rounded-tr-2xl -z-10"></div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                  {service.industry}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Technologies:</strong> {service.technologies}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Revino</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get in touch for professional web and mobile app development solutions. We're here to help!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Revino Solutions Pvt. Ltd.</p>
                    <p className="text-gray-600">No 4 , TF,</p>
                    <p className="text-gray-600">Sector 24, Rohini,</p>
                    <p className="text-gray-600">New Delhi-110085</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <p className="text-gray-600">+91 9289273327</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <p className="text-gray-600">hello@revino.in</p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Recognition</h3>
                <div className="flex items-center space-x-8">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Recognized By</p>
                    <img src="https://startupindia.gov.in/content/dam/invest-india/BrandAssets/startup_india_logo.png" alt="Startup India" className="h-12" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Incubated at</p>
                    <img src="/path-to-incubator-logo.png" alt="Incubator" className="h-12" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">Udyam Registration Number : UDYAM-DL-06-0066662</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Type your message here"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-all duration-300"
                >
                  Submit Your Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}