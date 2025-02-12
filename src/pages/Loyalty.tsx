import React, { useState } from 'react';
import { QrCode, Users, MessageSquare, Target, Gift, BarChart2, Mail, Phone, MapPin } from 'lucide-react';

export default function Loyalty() {
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
              <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                QR Code Based Loyalty Solutions
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Discover tailored loyalty and gifting solutions for your business with Revino Solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 rounded-full text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
                >
                  Get Started
                  <QrCode className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1622012864279-7c69a3e6e48d?auto=format&fit=crop&q=80&w=800"
                alt="QR Code Loyalty"
                className="relative rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lead Warming */}
            <div className="service-card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lead Warming</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Personalized outreach with targeted leads with timely follow-up</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Automated engagement using AI to trigger timely and relevant follow-ups</span>
                </li>
              </ul>
            </div>

            {/* Lead Engagement */}
            <div className="service-card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lead Engagement</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Interactive experience to engage leads with AI-powered chatbots</span>
                </li>
                <li className="flex items-start">
                  <BarChart2 className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Reward programs boost interaction with exclusive offers</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Feedback collection to gather customer insights and partner feedback</span>
                </li>
              </ul>
            </div>

            {/* Lead Capturing */}
            <div className="service-card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lead Capturing</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <QrCode className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Smart tools capture leads with interactive QR codes</span>
                </li>
                <li className="flex items-start">
                  <Gift className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Seamless data collection from events, stores, and online campaigns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Consult Revino</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get in touch with us for customized loyalty programs and gift vouchers tailored to your business needs. We're here to help!
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