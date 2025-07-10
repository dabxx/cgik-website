import React from "react";
import { Eye, Heart, Book, Users, Cross, Globe } from "lucide-react";

const About = () => {
  const visionPoints = [
    "To Know Jesus and make HIM Known",
    "To equip every believer in our Church to be an effective witness for Jesus Christ",
    "Every believer should grow in spiritual stature, being ready at all times to share the reason of their hope with others",
    "To systematically develop Christian Leadership and other spiritual gifts that God has endowed in the Church",
    "To take up the core calls to be vibrant hubs of strong Christian fellowship acting as focal points for caring for the needs and concerns of every believer",
  ];

  const beliefPoints = [
    "The Church of God subscribes to the following the foundational Christian doctrines:",
    "The inerrancy and infallibility of the Bible",
    "The virgin birth and spotless deity of Christ",
    "The atoning sacrifice of Christ's death for the sins of the world",
    "The literal resurrection of the body",
    "Christ's second coming in bodily form to earth",
  ];

  const doctrinaalCommitments = [
    {
      title: "Repentance",
      scripture: "Mark 1:15; Luke 13:3; Acts 3:19",
    },
    {
      title: "Justification",
      scripture: "Romans 5:1; Titus 3:7",
    },
    {
      title: "Regeneration",
      scripture: "Titus 3:5",
    },
    {
      title: "New Birth",
      scripture: "John 3:3; 1 Peter 1:23; 1 John 3:9",
    },
    {
      title: "Sanctification",
      scripture:
        "1 Thessalonians 5:23; 1 Corinthians 6:11; 1 Corinthians 1:30; 1 Thessalonians 4:3; Hebrews 13:12",
    },
    {
      title: "Holiness",
      scripture: "Luke 1:75; 1 Thessalonians 4:7; Hebrews 12:14",
    },
    {
      title: "Water Baptism",
      scripture: "Matthew 28:19; Mark 16:16; John 3:23; Acts 8:36, 38",
    },
    {
      title: "Baptism with the Holy Ghost",
      description:
        "subsequent to cleansing; the enduement of power for service",
      scripture: "Luke 24:49, 53; Acts 1:4-8",
    },
    {
      title: "The Speaking in Tongues",
      scripture: "Mark 16:17; Acts 2:4; Acts 10:44-46; Acts 19:1-7",
    },
    {
      title: "Spiritual Gifts",
      scripture: "1 Corinthians 12:1, 7-10, 28; 1 Corinthians 14",
    },
    {
      title: "Signs Following Believers",
      scripture: "Mark 16:17-20; Romans 15:18, 19; Hebrews 2:4",
    },
    {
      title: "Fruit of the Spirit",
      scripture:
        "Romans 6:22; Galatians 5:22, 23; Ephesians 5:9; Philippians 1:11",
    },
    {
      title: "Divine Healing",
      scripture:
        "Isaiah 53:4, 5; Matthew 8:16, 17; Mark 16:18; James 5:14, 15; 1 Peter 2:24",
    },
    {
      title: "The Lord's Supper",
      scripture: "Luke 22:17-20; 1 Corinthians 11:23-26",
    },
    {
      title: "Washing the Saints feet",
      scripture: "John 13:4-17; 1 Timothy 5:10",
    },
    {
      title: "Tithing and Giving",
      scripture:
        "Genesis 14:18-20; Hebrews 7:8; Malachi 3:10; Luke 11:42; 1 Corinthians 16:2; 2 Corinthians 9:6-7; 2 Corinthians 8:12",
    },
    {
      title: "Restitution",
      description: "where possible",
      scripture: "Matthew 3:8; Luke 19:8, 9",
    },
    {
      title: "The Premillennial Second Coming of Jesus",
      description:
        "First, to resurrect the dead saints and to catch away the living saints to Him in the air. Second, to reign on the earth a thousand years",
      scripture:
        "1 Thessalonians 4:15-17; 1 Corinthians 15:51-52; Zechariah 14:4; 1 Thessalonians 4:14-2; Thessalonians 1:7-10; Jude 14, 15; Revelation 5:10; 19:11-21; 20:4-6",
    },
    {
      title: "The Resurrection",
      scripture: "John 5:28, 29; Acts 24:15; Revelation 20:5, 6",
    },
    {
      title: "Eternal life for the righteous",
      scripture:
        "Matthew 25:46; Luke 18:30; John 10:28; Romans 6:22; 1 John 5:11-13",
    },
    {
      title: "Eternal punishment for the wicked",
      description: "No liberation nor annihilation",
      scripture:
        "Matthew 25:41-46; Mark 3:29; 2 Thessalonians 1:8, 9; Revelation 20:10, 15; 21:8",
    },
  ];

  const declarationOfFaith = [
    "In the verbal inspiration of the Bible.",
    "In one God eternally existing in three persons, namely: the Father, Son, and Holy Ghost.",
    "That Jesus Christ is the only begotten Son of the Father, conceived of the Holy Ghost, and born of the virgin Mary. That Jesus was crucified, buried, and raised from the dead. That He ascended to heaven and today stands at the right hand of the Father as the Intercessor for us.",
    "That all mankind by nature is depraved and destitute of the glory of God and has come short of God's original purpose for man. That all have sinned and are in need of salvation. That salvation is by grace through faith in Jesus Christ.",
    "That all who believe on Jesus Christ are justified on the grounds of His shed blood and, therefore, saved by grace through faith.",
    "In sanctification subsequent to the new birth, through faith in the blood of Christ, through the Word, and by the Holy Ghost.",
    "Holiness to be God's standard of living for His people.",
    "In the baptism with the Holy Ghost subsequent to a clean heart.",
    "In speaking with other tongues as the Spirit gives utterance and that it is the initial evidence of the baptism in the Holy Ghost.",
    "In water baptism by immersion, and all who repent should be baptized in the name of the Father, and of the Son, and of the Holy Ghost.",
    "Divine healing is provided for all in the atonement.",
    "In the Lord's Supper and washing of the saints' feet.",
    "In the premillennial second coming of Jesus. First, to resurrect the righteous dead and to catch away the living saints to Him in the air. Second, to reign on the earth a thousand years.",
    "In the bodily resurrection, eternal life for the righteous, and eternal punishment for the wicked.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* About Us Header Section */}
      <div className="bg-white shadow-sm text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-blue-900 mb-4">
            ABOUT US
          </h1>
          <p className="text-lg text-blue-700 font-medium max-w-2xl mx-auto">
            Koramangala Church of God (Bangalore, India) is part of Church of
            God (Cleveland, Tennessee). We exist to worship God, share His love,
            and equip believers through the Holy Spirit. Led by Pastor Nebu
            Yohannan, we welcome you to grow, connect, and live with purpose in
            Christ.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              OUR VISION
            </h2>
          </div>

          <div className="space-y-4">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Belief Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Book className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              OUR BELIEF
            </h2>
          </div>

          <div className="space-y-4">
            {beliefPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Cross className="w-3 h-3 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Doctrinal Commitments Section */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              DOCTRINAL COMMITMENTS
            </h2>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-8">
              The following Doctrinal Commitments represent the core beliefs of
              the denomination as outlined in Scripture:
            </p>

            <div className="grid gap-4">
              {/* Doctrinal points */}
              {doctrinaalCommitments.map((doctrine, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    <strong>{doctrine.title}.</strong>
                    {doctrine.description && ` ${doctrine.description}. `}
                    {doctrine.scripture}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Declaration of Faith Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cross className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              DECLARATION OF FAITH
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              The Church of God believes the whole Bible to be completely and
              equally inspired and that it is the written Word of God. The
              Church of God has adopted the following Declaration of Faith as
              its standard and official expression of its doctrine.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              We Believe:
            </h3>

            <div className="space-y-4">
              {declarationOfFaith.map((belief, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 opacity-90">
            We invite you to become part of our church family and experience
            God's love in a welcoming community.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Visit Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
