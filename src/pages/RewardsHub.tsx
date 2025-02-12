import React, { useState } from 'react';
import { Gift, Package, Award, ShoppingBag, Truck, HeartHandshake, Mail, Phone, MapPin } from 'lucide-react';

export default function RewardsHub() {
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
          <div className="text-center mb-12">
            <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Happiness Beyond Boundaries
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Over 3000 rewards options to choose from
            </p>
          </div>
        </div>
      </section>

      {/* Rewards Options */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Gift Vouchers',
                description: 'We provide a wide range of gift vouchers from leading brands like Amazon, Flipkart, Myntra, and more. Perfect for employee rewards and recognition programs.',
                image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Swag/Merchandise',
                description: 'Unique, branded promotional products that truly set you apart. We offer customizable items that your employees and clients will love to use.',
                image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Onboarding Kits & Merchandise',
                description: 'Through first contact onboarding kits, help reinforce your company culture and make new employees feel welcome and valued.',
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Fun Packs & Events',
                description: 'Wide range of customizable celebration packs for birthdays & team events. Perfect for recognizing special moments and creating lasting memories.',
                image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Eco-Friendly',
                description: 'Our eco-friendly products are designed with sustainability in mind, offering environmentally responsible choices that make a positive impact.',
                image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
              },
            ].map((option, index) => (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precise Last Mile Delivery */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
            alt="Delivery Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Precise Last Mile Delivery</h2>
            <p className="text-lg mb-8">
              Our dedicated logistics team ensures timely and accurate delivery of your rewards and gifts, maintaining the highest standards of service quality.
            </p>
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-300">RATED 5 STARS BY CUSTOMERS</p>
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
                Get in touch to explore our comprehensive rewards and gifting solutions. We're here to help!
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