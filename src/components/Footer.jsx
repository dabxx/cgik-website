import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Our Services",
    "Ministries",
    "Events",
    "Contact",
  ];

  const serviceTimes = [
    "Sunday English Service: 8:30 AM",
    "Sunday Malayalam Service: 10:00 AM",
    // "Bible Study: Wed 7:00 PM",
    "Fasting Prayer: Fri 11:00 AM",
    // "Youth Service: Sat 6:00 PM",
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/churchofgodkoramangala" },
    // { icon: Twitter, href: '#' },
    {
      icon: Instagram,
      href: "https://www.instagram.com/cgikoramangala/?hl=en",
    },
    { icon: Youtube, href: "https://www.youtube.com/@cogkoramangala" },
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4 w-52">
              <Link to="/home" className="">
                <img src="/images/church-logo.png" alt="logo" />
              </Link>
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
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
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
              <p>📞 +91 94470 93119</p>
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
            © {new Date().getFullYear()} Church of God, Koramangala. All rights
            reserved. | Designed and Developed by{" "}
            <a
              href="https://db-media.vercel.app/"
              className="text-cyan-400 underline hover:text-white transition-colors ml-1"
            >
              db media Bangalore
            </a>
            <a href="#" className="hover:text-white transition-colors ml-1">
              | Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-white transition-colors ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
