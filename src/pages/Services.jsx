import React, { useEffect, useState } from "react";

const Services = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4 overflow-hidden"
        style={{
          height: "40vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col justify-center h-full"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            SERVICES & SERMONS
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We believe that a church is meant to be a spiritual family that
            builds up and encourages one another to become more like Christ. We
            invite you to become a part of our fellowship at this garden city,
            Bangalore.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              JOIN US
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-600 mb-2">
              BE A PART OF OUR FAMILY
            </h3>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sunday Services */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                SUNDAY
              </h3>

              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-1">
                    ENGLISH WORSHIP
                  </h4>
                  <p className="text-gray-600">08:30 AM - 09:45 AM</p>
                </div>

                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-1">
                    MALAYALAM WORSHIP
                  </h4>
                  <p className="text-gray-600">10:00 AM - 12:30 PM</p>
                </div>

                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-1">
                    SUNDAY SCHOOL
                  </h4>
                  <p className="text-gray-600">8:30 AM - 9:30 AM</p>
                </div>

                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-1">
                    LADIES MINISTRY
                  </h4>
                  <p className="text-gray-600">7:00 PM - 8:00 PM</p>
                </div>

                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-1">
                    YOUTH MEETING (YPE)
                  </h4>
                  <p className="text-gray-600">3rd Sunday 12:00 PM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Friday Services */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                FRIDAY
              </h3>

              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-1">
                    FASTING PRAYER
                  </h4>
                  <p className="text-gray-600">10:30 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Saturday Services */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                SATURDAY
              </h3>

              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-1">
                    YOUTH PRAYER CELL
                  </h4>
                  <p className="text-gray-600">8:00 AM - 9:30 AM</p>
                </div>

                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-1">
                    PRAYER & BIBLE STUDY
                  </h4>
                  <p className="text-gray-600">7:30 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
