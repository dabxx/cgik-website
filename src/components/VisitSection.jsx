import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const VisitSection = () => {
  const serviceTimes = [
    { service: "English Service", time: "Sunday 9:00 AM" },
    { service: "Malyalam Service", time: "Sunday 10:00 AM" },
    { service: "Sunday School", time: "Sunday 9:00 AM" },
    { service: "Youth Prayer Cell", time: "Friday 7:00 PM" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: `# 418/8, 80 Feet Road, 6th Block, (Near BMTC Bus Depot)
Koramangala, Bangalore, Karnataka, India, Pin 560 095.`,
    },
    { icon: Phone, text: "+91 94470 93119" },
    { icon: Mail, text: "info@cogkoramangala.org" },
  ];

  return (
    <section className="py-20 bg-[#F7F3E7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Visit Us</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We welcome you to join our community and experience God's love
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-6">
              Service Times
            </h4>
            <div className="space-y-4">
              {serviceTimes.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-[#fffdf6] rounded-lg drop-shadow-sm"
                >
                  <span className="text-slate-600">{item.service}</span>
                  <span className="text-slate-600 font-semibold">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-6">
              Contact Information
            </h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="w-8 text-purple-500" />
                  <span className="text-slate-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
