import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageCircle,
  CheckCircle,
  XCircle,
  X,
} from "lucide-react";

// Custom Toast Component
const Toast = ({ message, type = "success", isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const baseClasses = "fixed bottom-4 right-4 z-50 max-w-sm w-full bg-white rounded-lg shadow-lg border-l-4 p-4 transform transition-all duration-300 ease-in-out";
  const typeClasses = {
    success: "border-green-500",
    error: "border-red-500",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} animate-slide-in`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {type === "success" ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500" />
          )}
        </div>
        <div className="ml-3 flex-1">
          <div className="text-sm font-medium text-gray-900">
            {message.title}
          </div>
          {message.description && (
            <div className="text-sm text-gray-700 mt-1">
              {message.description}
            </div>
          )}
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Custom Toast Hook
const useCustomToast = () => {
  const [toast, setToast] = useState({
    isVisible: false,
    message: { title: "", description: "" },
    type: "success",
  });

  const showToast = ({ title, description, status = "success" }) => {
    setToast({
      isVisible: true,
      message: { title, description },
      type: status === "error" ? "error" : "success",
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  return { toast, showToast, hideToast };
};

export default function ContactUs() {
  const { toast, showToast, hideToast } = useCustomToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  // Method 1: Using EmailJS (You'll need to configure your EmailJS account)
  const handleSubmitEmailJS = async () => {
    // Validate required fields
    if (
      !formData.name ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      showToast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        status: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Attempting to send email with data:", formData);

      const emailjs = (await import("@emailjs/browser")).default;

      // Initialize EmailJS with your public key
      emailjs.init("tIOSH2nWd1iz6JS6w");

      const result = await emailjs.send(
        "service_dwhwp76", // Your EmailJS service ID
        "template_hk9p89f", // Replace with your actual template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: "dany.db.dany@gmail.com",
        }
      );

      console.log("Email sent successfully:", result);

      showToast({
        title: "Message sent successfully!",
        description: "Thank you for your message! We will get back to you soon.",
        status: "success",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Email sending failed:", error);

      showToast({
        title: "Error sending message",
        description: "Sorry, there was an error sending your message. Please try again.",
        status: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Custom Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      {/* Header Section */}
      <div className="bg-white shadow-sm text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-blue-900 mb-4">Contact Us</h1>
          <p className="text-lg text-blue-700 font-medium max-w-2xl mx-auto">
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
              <h2 className="text-2xl font-serif text-gray-800">
                Send us a Message
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name <span className="text-red-600">*</span>
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
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
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
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Prayer Request">Prayer Request</option>
                    <option value="Planning to Visit">Planning to Visit</option>
                    <option value="Baptism Information">
                      Baptism Information
                    </option>
                    <option value="Church Membership">Church Membership</option>
                    <option value="Church Events">Church Events</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-black ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Share your message, prayer request, or any questions you have..."
                />
              </div>

              <button
                onClick={handleSubmitEmailJS}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
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
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Church of God, Koramangala
                  </h3>
                  <p className="text-gray-600">
                    # 418/8, 80 Feet Road, 6th Block, (Near BMTC Bus Depot){" "}
                    <br /> Koramangala, Bangalore, Karnataka, India, <br /> Pin
                    560 095.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">+91 94470 93119</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">
                        info@cogkoramangala.org
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-serif text-gray-800">
                  Service Times
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">
                    Sunday English Service
                  </span>
                  <span className="text-gray-600">8:30 AM - 10:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">
                    Sunday Malayalam Service
                  </span>
                  <span className="text-gray-600">10:00 AM - 12:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">
                    Sunday School
                  </span>
                  <span className="text-gray-600">9:00 AM - 10:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">
                    Friday Fasting Prayer
                  </span>
                  <span className="text-gray-600">11:00 AM - 12:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">
                    Friday Youth Prayer Cell
                  </span>
                  <span className="text-gray-600">7:00 PM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                Find Us on Map
              </h3>

              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.7285071849356!2d77.62574544020543!3d12.939646451527214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1443ef5da8e7%3A0x52c005d3251fde1!2sChurch%20of%20God%20Koramangala!5e0!3m2!1sen!2sin!4v1751909054127!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
            We welcome visitors and new members with open arms. Join us for
            worship, fellowship, and spiritual growth in a loving Christian
            community.
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

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}