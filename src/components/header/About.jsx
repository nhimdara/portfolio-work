import React, { useEffect } from "react";
import myPicard from "../assets/image/myPicture1.jpg";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Code,
  Users,
  Target,
} from "lucide-react";

// Floating Icons Component (you mentioned this but didn't define it)
const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-20 text-blue-400/20 animate-float">
      <Code size={48} />
    </div>
    <div className="absolute top-40 right-20 text-purple-400/20 animate-float-delayed">
      <Users size={48} />
    </div>
    <div className="absolute bottom-20 left-1/4 text-cyan-400/20 animate-float-slow">
      <Target size={48} />
    </div>
    {/* Add more floating icons as needed */}
  </div>
);

const About = () => {
  // Debug mounting
  useEffect(() => {
    console.log("About page loaded");
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const interests = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Building modern, responsive web applications",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Finding creative solutions to technical challenges",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen"> {/* Added pt-20 to account for fixed navbar */}
      {/* Floating Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcons />
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 1s;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>

      <section className="relative">
        <section className="relative overflow-hidden py-5 px-4">
          {/* Background Elements */}
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image Section */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border-4 border-cyan-500/30 transform transition-all duration-500 hover:shadow-cyan-500/40 hover:border-cyan-500/50">
                    <img
                      src={myPicard}
                      alt="Nhim Dara - IT Engineer"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform transition-all hover:scale-105">
                    IT Engineer
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-2/3 space-y-6">
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
                  About{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Me
                  </span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a passionate IT Engineering student at RUPP with a focus
                  on frontend development. My journey combines academic
                  knowledge from university with practical skills gained through
                  intensive training at ETAC Center.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors">
                    <Calendar className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">Age</p>
                      <p className="text-white font-semibold">21</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors">
                    <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-semibold">
                        Phnom Penh, Cambodia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors">
                    <GraduationCap className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">Education</p>
                      <p className="text-white font-semibold">IT Engineering</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors">
                    <Code className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">Specialization</p>
                      <p className="text-white font-semibold">
                        Frontend Development
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 pt-4 bg-gray-800/20 p-6 rounded-xl border-l-4 border-cyan-500">
                  My goal is to bridge the gap between design and technology,
                  creating seamless digital experiences that are both functional
                  and beautiful. I'm constantly learning and adapting to new
                  technologies to stay at the forefront of web development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-7 text-center">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Interests
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-gray-800/40 border border-gray-700 p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <div className="text-white">{interest.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;