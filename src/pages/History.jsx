import React from 'react';

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-blue-900 mb-4">
            Church History
          </h1>
          <p className="text-lg text-blue-700 font-medium">
            A Brief History of the Church of God
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-6 py-12">
        {/* First Section - Origins */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            It was 1886, in a crude meeting house on the{' '}
            <span className="text-blue-600 font-medium">Tennessee-North Carolina border</span>, 
            where the Church of God traces its roots. There, a group of eight sincere Christians had a deep 
            desire for a closer relationship and life with Christ. Realizing the futility of reforming their 
            own churches, they established a new church whose objective would be to restore sound scriptural 
            doctrines of the Bible, encourage deeper consecration and promote evangelism and Christian service. 
            Twenty-one years after the formation of the Christian Union that evening at the Barney Creek 
            Meeting House, the growing movement would establish themselves permanently as the Church of God.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            From this seemingly insignificant origin has grown one of the most influential worldwide 
            Pentecostal denominations. For over 125 years the Church of God has been a distinctive 
            movement focused upon communicating the gospel in the power of the Holy Spirit. Presently, 
            the Church of God has a world-wide membership of over{' '}
            <span className="text-blue-600 font-semibold">7 million</span> with a presence in nearly{' '}
            <span className="text-blue-600 font-semibold">180 countries</span>. Leaders of the Church 
            of God are recognized as some of the most respected Pentecostal leaders of today.
          </p>
        </div>

        {/* Second Section - Present Day */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            The call of the Church of God today beckons back to those early days at Barney Creek. 
            Church of God congregations around the globe are experiencing the fire of the Holy Spirit 
            today more than ever. Reports of revivals where hundreds are saved and filled with the 
            Holy Spirit are frequent and on-going. The call of the Church of God is for world 
            evangelization. It is a call to discipleship and prayer. It is a call of commitment. 
            It is a call for the Church of God to be a channel for Pentecostal revival well into 
            the new millennium.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Visit{' '}
            <a 
              href="http://www.churchofgod.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              http://www.churchofgod.org
            </a>
          </p>
        </div>

        {/* Koramangala Section */}
        <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2 p-5">
              <img 
                src="/images/history.jpg" 
                alt="Church of God Koramangala Building" 
                className="w-full h-64 md:h-full object-contain"
              />
            </div>
            
            {/* Content Section */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-serif text-blue-900 mb-6">
                A Brief History of the Church of God, Koramangala.
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The history of CGI Koramangala dates back to 1989 April 9th, Sunday, when the first 
                  worship service started at{' '}
                  <span className="font-medium">Br. P.M. Mathai's residence at Langford Town in Bangalore</span>. 
                  Br. P.M. Mathai was a Gulf returnee who had decided to spend his retired life at Bangalore 
                  city. He had a great passion to worship our saviour in his mother tongue, Malayalam in 
                  Bangalore city, and Lord used him to pave the foundation stone for the first Church of 
                  God mission in the city of Bangalore.
                </p>
                
                <p>
                  After continuing the worship service at Br.P.M.Mathai's residence for few months, for 
                  the convenience of congregation members, the gathering first moved to a school building, 
                  then to a commercial building in and around{' '}
                  <span className="font-medium">5th block at Koramangala</span>. All these places, the 
                  congregation faced lot of hardship from the people who are against the gospel. This 
                  pained Br. P.M.Mathai and he donated his land measuring 1200 Sq. Feet located at 6th 
                  block of Koramangala, facing 80 Feet road, as a wilful gift to Church of God. In addition, 
                  God used him to construct a place to worship along with other members of the congregation.
                </p>
                
                <p>
                  Finally as a reply to the steadfast prayer of all members, the then State Overseer of 
                  CGI Kerala{' '}
                  <span className="font-medium">State Rev. P.A.V. Sam</span> inaugurated the church building 
                  on 15th May 1994. Since then, we can look back only with a heart full of thanks and 
                  praises to the Lord who cared and protected his flock all through these years.
                </p>
                
                <p className="italic text-blue-800">
                  We also remember with gratitude all the below servants of God who lead our church, 
                  as they have laboured much for the growth of this church.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-200">
            Church of God - Spreading the Gospel in the Power of the Holy Spirit
          </p>
        </div>
      </div>
    </div>
  );
}

export default History