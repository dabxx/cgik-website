import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for any questions, 
            prayer requests, or to learn more about our church community.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-serif text-gray-800">Send us a Message</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="visit">Planning to Visit</option>
                    <option value="baptism">Baptism Information</option>
                    <option value="membership">Church Membership</option>
                    <option value="events">Church Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Share your message, prayer request, or any questions you have..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Church Location */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-serif text-gray-800">Visit Us</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Church of God, Koramangala</h3>
                  <p className="text-gray-600">
                    6th Block, Koramangala<br />
                    80 Feet Road<br />
                    Bangalore, Karnataka 560095<br />
                    India
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">info@cogkoramangala.org</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-serif text-gray-800">Service Times</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Sunday Morning Service</span>
                  <span className="text-gray-600">9:00 AM - 11:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Sunday Evening Service</span>
                  <span className="text-gray-600">6:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Wednesday Prayer Meeting</span>
                  <span className="text-gray-600">7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Friday Youth Service</span>
                  <span className="text-gray-600">7:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Saturday Bible Study</span>
                  <span className="text-gray-600">7:00 PM - 8:30 PM</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-serif text-gray-800 mb-4">Find Us on Map</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">6th Block, Koramangala, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-serif text-gray-800 mb-4">
            New to Our Church?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We welcome visitors and new members with open arms. Join us for worship, 
            fellowship, and spiritual growth in a loving Christian community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Friendly Community
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Biblical Teaching
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Spirit-Filled Worship
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              All Ages Welcome
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}