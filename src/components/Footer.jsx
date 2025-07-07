import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'About Us',
    'Our Services',
    'Ministries',
    'Events',
    'Contact'
  ];

  const serviceTimes = [
    'Sunday Service: 10:00 AM',
    'Bible Study: Wed 7:00 PM',
    'Prayer Meeting: Fri 6:30 PM',
    'Youth Service: Sat 6:00 PM'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="text-slate-900 font-bold">⛪</div>
              </div>
              <div>
                <h4 className="font-bold">Church of God</h4>
                <p className="text-sm text-slate-300">Koramangala, Bangalore</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Worshiping God in Spirit and Truth, building a community of faith, 
              hope, and love in the heart of Bangalore.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Service Times */}
          <div>
            <h5 className="font-bold mb-4">Service Times</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              {serviceTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h5 className="font-bold mb-4">Get In Touch</h5>
            <div className="space-y-2 text-sm text-slate-400 mb-4">
              <p>📍 Koramangala, Bangalore</p>
              <p>📞 +91 9876543210</p>
              <p>✉️ info@cogkoramangala.org</p>
            </div>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Church of God, Koramangala. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;