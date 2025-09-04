import { useEffect, useState, useRef } from "react";
import {
  Code,
  Palette,
  Server,
  Smartphone,
  Award,
  Users,
  Coffee,
  Zap,
  Calendar,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    coffee: 0,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const targets = {
            projects: 25,
            clients: 15,
            experience: 2,
            coffee: 847,
          };
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;

          (Object.keys(targets) as Array<keyof typeof targets>).forEach((key) => {
            const target = targets[key];
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
            }, stepTime);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "Frontend Development",
      level: 90,
      icon: Code,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Backend Development",
      level: 85,
      icon: Server,
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "Mobile Development",
      level: 75,
      icon: Smartphone,
      color: "from-orange-500 to-red-400",
    },
    {
      name: "UI/UX Design",
      level: 70,
      icon: Palette,
      color: "from-purple-500 to-pink-400",
    },
  ];

  const stats = [
    {
      icon: Code,
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: counters.clients,
      suffix: "+",
    },
    {
      icon: Award,
      label: "Years Experience",
      value: counters.experience,
      suffix: "+",
    },
    {
      icon: Coffee,
      label: "Cups of Coffee",
      value: counters.coffee,
      suffix: "+",
    },
  ];

  const achievements = [
    "🎓 Computer Science Engineering Student",
    "💻 Full-Stack Development Expertise",
    "🚀 Multiple successful project deployments",
    "🌟 Passionate about emerging technologies",
  ];


  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Main About Content */}
          <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
            {/* Left Column: Image and Education */}
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              {/* Image */}
              <img
                src="./src/assets/Sumit1.jpeg"
                alt="Sumit Sharma"
                className="w-96 h-96 object-cover border-4 border-blue-400 shadow-xl bg-slate-800 mb-6"
                style={{ borderRadius: "1rem" }}
              />
              {/* Education Section */}
              <div className="w-full md:w-96">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Award className="text-blue-400" size={20} />
                  Education
                </h4>
                <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                  <h5 className="text-white font-medium mb-1">
                    Bachelor of Technology in Computer Science
                  </h5>
                  <p className="text-blue-400 text-sm mb-1">
                    Engineering College
                  </p>
                  <div className="flex items-center gap-4 text-slate-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      2022 - Present
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Paragraphs, Technical Expertise, Key Highlights, Tech Stack */}
            <div className="flex-1 flex flex-col justify-start">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <Zap className="text-blue-400" size={24} />
                Passionate Developer & Engineer
              </h3>
              <div className="text-slate-300 mb-8 leading-relaxed max-w-3xl">
                <p className="mb-6 ">
                  I'm Sumit Sharma, a dedicated Computer Science Engineering
                  student with a passion for full-stack development and emerging
                  technologies. My journey in software development has been
                  driven by curiosity and a desire to create meaningful
                  solutions that solve real-world problems.
                </p>
                <p className="pb-20">
                  Over the years, I have immersed myself in a variety of
                  projects, collaborating with talented individuals and teams to
                  deliver high-quality, scalable applications. My commitment to
                  continuous learning keeps me updated with the latest trends
                  and best practices in the tech industry. Whether working on
                  frontend interfaces or backend logic, I strive to write clean,
                  maintainable code and to create user experiences that are both
                  functional and delightful.
                </p>
              </div>
              {/* Technical Expertise Section */}
              <div className="w-full mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Technical Expertise
                </h4>
                <div className="space-y-6">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skill.name} className="group">
                        <div className="flex items-center mb-2">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} mr-3 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent size={20} className="text-white" />
                          </div>
                          <span className="text-white font-medium flex-1">
                            {skill.name}
                          </span>
                          <span className="text-slate-400 font-mono text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden relative">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full relative`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 200}ms`,
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Key Highlights Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Key Highlights
                </h4>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center text-slate-300 transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-10"
                      }`}
                      style={{ transitionDelay: `${index * 150 + 500}ms` }}
                    >
                      <span className="mr-3">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "JavaScript",
                  "MongoDB",
                  "Express.js",
                  "Git",
                ].map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 800}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
