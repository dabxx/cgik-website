import React, { useEffect, useState } from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-blue-900 mb-4">
            SERVICES & SERMONS
          </h1>
          <p className="text-lg text-blue-700 font-medium max-w-2xl mx-auto">
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
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
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
                  <p className="text-gray-600">9:00 AM - 10:00 AM</p>
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
