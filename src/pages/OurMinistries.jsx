import React from 'react';
import { BookOpen, Users, Heart, Send } from 'lucide-react';

const Ministries = () => {
  const galleryImages = [
    { src: '/api/placeholder/200/150', alt: 'Community gathering' },
    { src: '/api/placeholder/200/150', alt: 'Youth activities' },
    { src: '/api/placeholder/200/150', alt: 'Mission work' },
    { src: '/api/placeholder/200/150', alt: 'Group photo' },
    { src: '/api/placeholder/200/150', alt: 'Church service' },
    { src: '/api/placeholder/200/150', alt: 'Community service' },
    { src: '/api/placeholder/200/150', alt: 'Fellowship' },
    { src: '/api/placeholder/200/150', alt: 'Bible study' },
    { src: '/api/placeholder/200/150', alt: 'Outreach program' },
    { src: '/api/placeholder/200/150', alt: 'Prayer meeting' },
    { src: '/api/placeholder/200/150', alt: 'Ministry team' },
    { src: '/api/placeholder/200/150', alt: 'Church activities' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-amber-100 text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-amber-900 mb-6">OUR MINISTRIES</h1>
        <p className="text-amber-800 max-w-4xl mx-auto leading-relaxed">
          "For the equipping of the saints for the work of the ministry, for the edifying of the body of Christ, till we all come to the unity of the faith and of the knowledge of the Son of God, to a perfect person, to the measure of the stature of the fullness of Christ, that we...may grow up in all things into Him who is the head, that is, Christ." (Eph. 4:12-15)
        </p>
      </div>

      {/* Ministries Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Sunday School */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">SUNDAY SCHOOL</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sunday school is the foundation stone for the spiritual growth of every child. Surely, the Lord plants the spiritual seed in the heart of our kids. It is a comprehensive way of learning from one another and to receive knowledge from the Bible.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              The greatest gift, the most precious inheritance that we have to give to our children is our faith.
            </p>
          </div>

          {/* Youth Ministry */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">YOUTH MINISTRY (YPE)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              In an era where the young generation is being targeted with many spiritual ideas or options are available, the youth are quick to understand about what is right and wrong. We believe church has a great potential to mold and shape the young minds in the area of right direction rather than preaching, we equip them to understand Gods will about them and to walk in a manner pleasing to our Lord.
            </p>
          </div>

          {/* Ladies Ministry */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">LADIES MINISTRY</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ladies Ministries (LM) is our back bone of Prayer ministry. The ladies are the ones who run the Christian homes. Since God has blessed them with a soft heart for the family and the needy.
            </p>
          </div>
        </div>

        {/* Mission Team */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">MISSION TEAM</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Inspired from the great commandment and authority which God has given us, We have a great passion and call to people who needs our help. The Gospel of Jesus Christ has power to heal and transform lives.
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministries;