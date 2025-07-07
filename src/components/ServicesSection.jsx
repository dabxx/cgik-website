import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: '🙏',
      title: 'Sunday Worship',
      description: 'Join us every Sunday at 10:00 AM for worship and fellowship.'
    },
    {
      icon: '📖',
      title: 'Bible Study',
      description: 'Weekly Bible study sessions every Wednesday at 7:00 PM.'
    },
    {
      icon: '👥',
      title: 'Youth Ministry',
      description: 'Active youth programs and activities for spiritual growth.'
    }
  ];

  return (
    <section className="py-20 bg-[#F7F3E7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join us for meaningful worship, fellowship, and spiritual growth in our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white drop-shadow-sm p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#fffdf6] drop-shadow-md rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h4>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;