import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  // Array of background images - you can replace these with your actual church images
  const backgroundImages = [
    "/images/HeroBanner/home1.jpeg",
    "/images/HeroBanner/home2.jpg",
    "/images/HeroBanner/home3.jpg",
    "/images/HeroBanner/BLR1.jpg",
    "/images/HeroBanner/BLR2.jpg",
    "/images/HeroBanner/BLR3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, backgroundImages.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-60" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <p className="text-lg text-slate-300 mb-8 tracking-wide">
          WELCOME TO CHURCH OF GOD KORAMANGALA, BANGALORE
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Looking for a place of worship in Bangalore?
        </h2>

        <p className="text-2xl md:text-4xl font-light mb-12 leading-relaxed text-slate-200">
          Come join us for a fellowship, worshiping God in Spirit and in Truth,
          at the heart of the Garden city.
        </p>

        <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
          READ MORE →
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-300 transition-colors z-20 bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-300 transition-colors z-20 bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            isAutoPlaying ? "bg-green-400" : "bg-gray-400"
          }`}
        />
      </div>
    </section>
  );
};

export default HeroSection;