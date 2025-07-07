import React, { useState, useEffect } from "react";
import { Play, ExternalLink, Youtube } from "lucide-react";

const YouTubeVideosSection = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  
  // Replace with your actual YouTube channel's uploads playlist ID
  // Format: UU + your channel ID (without the UC prefix)
  // Example: If your channel ID is UCxxxxxxxxxxxxxx, your uploads playlist ID is UUxxxxxxxxxxxxxx
  const UPLOADS_PLAYLIST_ID = "UUJIFT1sIKzfzcqTyZBVXivg";
  
  // You can also add specific video IDs if you want to feature particular videos
  const FEATURED_VIDEOS = [
    // Add specific video IDs here if you want to override the playlist
    // "dQw4w9WgXcQ", // Example video ID
  ];

  const getMainPlayerUrl = () => {
    if (FEATURED_VIDEOS.length > 0) {
      return `https://www.youtube.com/embed/${FEATURED_VIDEOS[selectedVideoIndex]}?autoplay=0&rel=0&modestbranding=1`;
    }
    return `https://www.youtube.com/embed?listType=playlist&list=${UPLOADS_PLAYLIST_ID}&index=${selectedVideoIndex + 1}&autoplay=0&rel=0&modestbranding=1`;
  };

  const getSubPlayerUrl = (index) => {
    if (FEATURED_VIDEOS.length > 0) {
      return `https://www.youtube.com/embed/${FEATURED_VIDEOS[index]}?autoplay=0&rel=0&modestbranding=1`;
    }
    return `https://www.youtube.com/embed?listType=playlist&list=${UPLOADS_PLAYLIST_ID}&index=${index + 1}&autoplay=0&rel=0&modestbranding=1`;
  };

  const getChannelUrl = () => {
    // Convert uploads playlist ID back to channel ID
    const channelId = UPLOADS_PLAYLIST_ID.replace('UU', 'UC');
    return `https://www.youtube.com/channel/${channelId}`;
  };

  const totalVideos = FEATURED_VIDEOS.length > 0 ? FEATURED_VIDEOS.length : 3;
  const subPlayerIndices = Array.from({ length: Math.min(totalVideos - 1, 5) }, (_, i) => 
    (selectedVideoIndex + i + 1) % totalVideos
  );

 

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Sermons & Live Streams
          </h2>
          <p className="text-xl text-gray-600">
            Watch our latest services and join us for live worship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <div className="aspect-video">
                  <iframe
                    src={getMainPlayerUrl()}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Main Video Player"
                  />
                </div>
                
                {/* Live indicator overlay */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  LIVE
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {selectedVideoIndex === 0 ? "Latest Service" : `Service ${selectedVideoIndex + 1}`}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Youtube className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-600">Church of God Koramangala</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Join us for worship, fellowship, and God's word. Experience the presence of the Lord with us.
                </p>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => window.open(getChannelUrl(), '_blank')}
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Watch on YouTube</span>
                  </button>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Play className="w-4 h-4" />
                    <span>Auto-updates with latest content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Players */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">More Videos</h4>
              
              <div className="space-y-4">
                {subPlayerIndices.map((videoIndex, index) => (
                  <div key={index} className="group">
                    <div 
                      className="aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedVideoIndex(videoIndex)}
                    >
                      <iframe
                        src={getSubPlayerUrl(videoIndex)}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Sub Video Player ${index + 1}`}
                      />
                    </div>
                    
                    <div className="mt-2 px-2">
                      <h5 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                        {videoIndex === 0 ? "Latest Service" : `Service ${videoIndex + 1}`}
                      </h5>
                      <p className="text-xs text-gray-500 mt-1">
                        Click to play in main player
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => window.open(getChannelUrl(), '_blank')}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Youtube className="w-4 h-4" />
                  <span>View All Videos</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideosSection;