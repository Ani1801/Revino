import React from 'react';
import { Megaphone, Search, Share2, Mail, BarChart2, Users, Globe, Target, Lightbulb, PenTool, Rocket, Trophy } from 'lucide-react';

export default function Marketing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent dark:from-primary/10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000')] bg-cover opacity-5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Marketing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your business with innovative marketing services for growth, profitability, and digital success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Services Overview</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We bring a fresh perspective to your marketing needs, helping your business grow effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategy & Positioning */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                  alt="Strategy & Positioning"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">Strategy & Positioning</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><Target className="w-5 h-5 mr-2 text-primary" />Brand Strategy</li>
                  <li className="flex items-center"><Globe className="w-5 h-5 mr-2 text-primary" />Market Research</li>
                  <li className="flex items-center"><Lightbulb className="w-5 h-5 mr-2 text-primary" />Value Proposition</li>
                  <li className="flex items-center"><PenTool className="w-5 h-5 mr-2 text-primary" />Marketing Framework</li>
                </ul>
              </div>
            </div>

            {/* Digital Growth */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Digital Growth"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">Digital Growth</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><Search className="w-5 h-5 mr-2 text-primary" />SEO</li>
                  <li className="flex items-center"><Rocket className="w-5 h-5 mr-2 text-primary" />Social Media Marketing</li>
                  <li className="flex items-center"><Mail className="w-5 h-5 mr-2 text-primary" />Content Creation</li>
                  <li className="flex items-center"><Megaphone className="w-5 h-5 mr-2 text-primary" />Revenue Campaigns</li>
                </ul>
              </div>
            </div>

            {/* Consulting */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                  alt="Consulting"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">Consulting</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Market Entry Strategy</li>
                  <li className="flex items-center"><BarChart2 className="w-5 h-5 mr-2 text-primary" />Business Development</li>
                  <li className="flex items-center"><Trophy className="w-5 h-5 mr-2 text-primary" />Competitive Positioning</li>
                  <li className="flex items-center"><Share2 className="w-5 h-5 mr-2 text-primary" />Marketing Strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consult Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Consult with us</h2>
              <p className="text-lg mb-8">
                Get in touch for expert marketing services, including branding, digital growth, and marketing advice to your business needs.
              </p>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your message"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300"
                >
                  Submit Your Inquiry
                </button>
              </form>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
                alt="Marketing Consultation"
                className="rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}