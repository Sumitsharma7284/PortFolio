import {
  ArrowRight,
  Calendar,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
// If the file is in the same folder as Hero.tsx:
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision-demo";

// Or, if it's in the parent 'components' folder:
// import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision-demo";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    setIsVisible(true);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "src/assets/Resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-slate-900/50"
    >
      {/* Background Elements */}
      <BackgroundBeamsWithCollision className="min-h-screen flex items-center relative overflow-hidden bg-slate-900/50">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for opportunities
              </div>

              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Hi, I'm <span>Sumit</span>
                </h1>
                <div className="h-16 flex items-center">
                  <p className="text-2xl lg:text-3xl font-semibold text-slate-300">
                    {roles[currentRole]}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
                I craft digital experiences that blend innovative technology
                with thoughtful design. Passionate about building scalable
                solutions that make a meaningful impact.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 mb-10 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-400" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-400" />
                  <span>3+ Years Experience</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToAbout}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>

                <button
                  onClick={downloadResume}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 border-2 border-slate-700 text-white rounded-xl font-semibold hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Download size={18} className="text-blue-400" />
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400 font-medium">
                  Connect:
                </span>
                <div className="flex gap-3">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/Sumitsharma7284",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/sumit-sharma-994902320/",
                      label: "LinkedIn",
                    },
                    {
                      icon: Mail,
                      href: "mailto:sumitsharma11454@gmail.com",
                      label: "Email",
                    },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-110 transform shadow-sm hover:shadow-md"
                      aria-label="label"
                    >
                      <Icon
                        size={20}
                        className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div
              className={`relative transition-all duration-1200 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative z-10">
                  <div className="h-[32rem] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                    <img
                      src="src\assets\Sumit2.jpeg"
                      alt="Sumit Sharma - Professional Portrait"
                      className="w-full h-full object-cover object-center brightness-75"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Background Blobs */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-80 blur-xl z-0"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-60 blur-2xl z-0"></div>

                {/* Floating Card */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 z-20 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-semibold text-white">
                      Currently Working
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Building innovative
                    <br />
                    web applications
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="absolute -right-6 bottom-1/4 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-700 p-4 z-20 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      15+
                    </div>
                    <div className="text-xs text-slate-300">
                      Projects
                      <br />
                      Completed
                    </div>
                  </div>
                </div>

                {/* Tech Stack Indicator */}
                <div className="absolute top-8 -right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700 p-3 z-20 shadow-lg">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-slate-300 mt-2 font-medium">
                    Full Stack
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToAbout}
              className="group flex flex-col items-center gap-2 text-slate-4hover:text-blue-400 transition-colors duration-300"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-slate-700 group-hover:border-blue-400 rounded-full flex justify-center transition-colors duration-300">
                <div className="w-1 h-3 bg-blue-400 group-hover:bg-purple-400 rounded-full mt-2 animate-bounce transition-colors duration-300"></div>
              </div>
            </button>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;
