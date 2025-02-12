import React, { useState } from 'react';
import { Bot, Cpu, Brain, Zap, BarChart2, Workflow, FileText, Calendar, DollarSign, ShoppingBag, MessageSquare, Users, Mail, Phone, MapPin } from 'lucide-react';

export default function AIAutomation() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Hexagon Grid Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent dark:from-primary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Empowering Businesses with AI Solutions
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We offer a wide range of AI-powered solutions designed to help businesses streamline operations, reduce costs, and drive growth.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="flex-1 p-6 bg-white rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-sm text-gray-600">Innovative Solutions</p>
                </div>
                <div className="flex-1 p-6 bg-white rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-4xl font-bold text-primary mb-2">130+</h3>
                  <p className="text-sm text-gray-600">Trusted by Clients</p>
                </div>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                alt="AI Solutions"
                className="relative rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section with Staggered Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="hero-title text-3xl font-bold mb-6">Our Solutions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our comprehensive AI solutions designed to drive efficiency and growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Workflow Automation - Startup Tech Firm',
                description: 'Streamline document handling and classification. Reduce manual data entry by 40% and improve accuracy.',
                industry: 'Technology Startup',
              },
              {
                icon: Brain,
                title: 'AI-Powered Lead Scoring',
                description: 'Increased sales efficiency by 45% and boosted lead conversion rates with high-precision scoring.',
                industry: 'Sales/Marketing',
              },
              {
                icon: MessageSquare,
                title: 'AI Chatbot for Local Retail',
                description: '24/7 customer support availability with reduced response time by 60% and improved customer satisfaction.',
                industry: 'Retail',
              },
              {
                icon: ShoppingBag,
                title: 'Inventory Management',
                description: 'Reduced inventory costs by 25% and improved efficiency with better stock control.',
                industry: 'Manufacturing',
              },
              {
                icon: DollarSign,
                title: 'Payroll Automation',
                description: 'Reduced payroll processing time by 35% and eliminated errors in salary disbursement.',
                industry: 'Finance',
              },
              {
                icon: Calendar,
                title: 'AI-Driven Appointment Scheduling',
                description: 'Reduced no-shows by 45% and improved patient experience with smart confirmations.',
                industry: 'Healthcare',
              },
              {
                icon: FileText,
                title: 'Document Processing for Legal',
                description: 'Reduced document review time by 50% and improved accuracy in contract analysis.',
                industry: 'Legal',
              },
              {
                icon: BarChart2,
                title: 'AI for Financial Planning',
                description: 'Cut data analysis time by 35% and enhanced accuracy in financial insights.',
                industry: 'Accounting',
              },
              {
                icon: Users,
                title: 'AI Recruitment Solutions',
                description: 'Reduced hiring time by 70% and improved quality of candidates presented to clients.',
                industry: 'Staffing',
              }
            ].map((solution, index) => (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                style={{
                  transform: `translateY(${index % 2 * 20}px)`
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-2xl rounded-tr-2xl -z-10"></div>
                <div className="service-icon bg-gradient-to-br from-primary to-accent p-3 rounded-xl inline-block">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mt-4">
                  {solution.industry}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section with Cards */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="hero-title text-3xl font-bold mb-6">Why Businesses Trust Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Transform your business with our efficient AI automation solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tailored Solutions',
                description: 'Every business is unique, and we customize our solutions to fit your specific needs.',
                icon: Brain,
              },
              {
                title: 'Cutting-Edge Technology',
                description: 'We leverage the latest advancements in AI to deliver unparalleled results.',
                icon: Cpu,
              },
              {
                title: 'Proven Track Record',
                description: 'Our successful implementations and satisfied clients speak to our expertise.',
                icon: BarChart2,
              }
            ].map((feature, index) => (
              <div key={index} className="relative bg-gradient-to-br from-primary to-accent p-[2px] rounded-2xl">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl h-full">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
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
                Get in touch for tailored AI automation solutions that drive efficiency and growth for your business. We're here to help!
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