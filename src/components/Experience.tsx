import { useEffect, useState, useRef } from "react";
import {
  Calendar,
  MapPin,
  Award,
  Lightbulb,
  Trophy,
  Camera,
  ExternalLink,
  Github,
  Shield,
  Code,
  Mic,
  Heart,
  Flag,
  Sparkles,
} from "lucide-react";
import Globe from "../components/ui/Globe.tsx";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection detected:", entry.isIntersecting);
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 } // or [0, 0.1] for more granular control
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  
  
  

  // Real experiences and achievements
  const events = [
    {
      id: 1,
      title: "Cyber Connect Workshop",
      role: "Participant & Security Enthusiast",
      organization: "Microsoft Office Gurugram",
      date: "Recent",
      location: "Gurugram, India",
      type: "Workshop",
      description:
        "Attended an insightful cybersecurity workshop at Microsoft's Gurugram office, exploring real-world cyber threats, ethical hacking tools, and security frameworks. This hands-on learning experience deepened my understanding of various security concepts and modern cybersecurity practices.",
      highlights: [
        "🔐 Explored real-world cyber threats and vulnerabilities",
        "⚡ Hands-on experience with ethical hacking tools",
        "🛡️ Deep dive into security frameworks and protocols",
        "🎯 Practical learning in cybersecurity best practices",
        "🚀 Networking with Microsoft security experts",
      ],
      photos: [
        {
          url: "./src/assets/Microsoft1.jpeg",
          caption: "Microsoft office cybersecurity workshop",
        },
        {
          url: "./src/assets/Microsoft2.jpeg",
          caption: "Hands-on ethical hacking session",
        },
        {
          url: "./src/assets/Microsoft3.JPG",
          caption: "Security frameworks discussion",
        },
      ],
      icon: Shield,
      color: "from-blue-600 to-cyan-500",
      achievements: ["Cybersecurity Fundamentals", "Ethical Hacking Exposure"],
      links: {
        certificate: "#",
        reflection: "#",
      },
    },
    {
      id: 2,
      title: "CODE STORM 36-Hour Hackathon",
      role: "Participant & Developer",
      organization: "Spirit Organization × Microsoft Learn Student Ambassadors",
      date: "2024",
      location: "Tech Campus",
      type: "Hackathon",
      description:
        "Participated in an intensive 36-hour hackathon organized by Spirit Organization in collaboration with Microsoft Learn Student Ambassadors. Built innovative solutions while collaborating with talented developers and learning cutting-edge technologies.",
      highlights: [
        "⚡ 36-hour intensive coding marathon",
        "🤝 Collaboration with Microsoft Learn Student Ambassadors",
        "💡 Developed innovative tech solutions under pressure",
        "🏆 Competed against top developers nationwide",
        "📚 Learned latest Microsoft technologies and frameworks",
      ],
      photos: [
        {
          url: "./src/assets/Codestorm1.jpeg",
          caption: "Intense coding session during hackathon",
        },
        {
          url: "./src/assets/Codestorm2.jpeg",
          caption: "Team collaboration and brainstorming",
        },
        {
          url: "./src/assets/Codestorm3.jpeg",
          caption: "Final presentation to judges",
        },
      ],
      icon: Code,
      color: "from-green-600 to-emerald-500",
      achievements: ["36-Hour Challenge Completed", "Microsoft Technologies"],
      links: {
        project: "#",
        github: "#",
      },
    },
    {
      id: 3,
      title: "Ideathon - Innovation Workshop",
      role: "Volunteer & Organizer",
      organization: "Innovxus Club × Microsoft",
      date: "2024",
      location: "University Campus",
      type: "Community",
      description:
        "Volunteered at the Ideathon organized by Innovxus Club, powered by Microsoft. This event was a powerhouse of innovation, collaboration, and problem-solving, where participants tackled real-world challenges with creative and tech-driven solutions.",
      highlights: [
        "🎯 Organized innovation-focused ideathon event",
        "🤖 Witnessed AI-powered automation solutions",
        "🌱 Supported sustainability-focused innovations",
        "👥 Facilitated collaboration between diverse teams",
        "✨ Helped showcase creative tech solutions",
      ],
      photos: [
        {
          url: "./src/assets/ideathon1.jpeg",
          caption: "Ideathon event coordination",
        },
        {
          url: "./src/assets/ideathon2.jpeg",
          caption: "Participants brainstorming solutions",
        },
        {
          url: "./src/assets/ideathon3.jpeg",
          caption: "Innovation showcase presentations",
        },
      ],
      icon: Lightbulb,
      color: "from-purple-600 to-pink-500",
      achievements: ["Event Organization", "Innovation Facilitation"],
      links: {
        event: "#",
        highlights: "#",
      },
    },
    {
      id: 4,
      title: "One India Cultural Festival",
      role: "Cultural Representative & Performer",
      organization: "Lovely Professional University",
      date: "2025",
      location: "Punjab, India",
      type: "Cultural",
      description:
        "Represented Uttarakhand and the School of Polytechnic at LPU's annual 'One India' cultural festival. This incredible event celebrates unity in diversity, where students from all over India showcase their unique traditions and heritage.",
      highlights: [
        "🏆 First Runner-Up position in national competition",
        "🎖️ Consolation Prize recognition",
        "🏔️ Proudly represented Uttarakhand's culture",
        "🎭 Showcased regional traditions on national stage",
        "🤝 Celebrated unity in diversity with students nationwide",
      ],
      photos: [
        {
          url: "./src/assets/Oneindia1.jpeg",
          caption: "Cultural performance representing Uttarakhand",
        },
        {
          url: "./src/assets/Oneindia2.jpeg",
          caption: "Team celebration after winning",
        },
        {
          url: "./src/assets/Oneindia3.jpeg",
          caption: "Unity in diversity showcase",
        },
      ],
      icon: Flag,
      color: "from-orange-600 to-red-500",
      achievements: [
        "First Runner-Up",
        "Consolation Prize",
        "Cultural Ambassador",
      ],
      links: {
        performance: "#",
        gallery: "#",
      },
    },
    {
      id: 5,
      title: "Tatva 2025 - Saam-e-Lawza",
      role: "Event Organizer & Host",
      organization: "University Cultural Committee",
      date: "2025",
      location: "University Campus",
      type: "Cultural",
      description:
        "Organized and hosted the opening event of Tatva 2025 - 'Saam-e-Lawza', a mesmerizing Shayari and Poetry Night. This evening was dipped in emotion, rhythm, and timeless expression, where words danced and emotions echoed.",
      highlights: [
        "🎭 Organized opening ceremony of Tatva 2025",
        "📝 Hosted Shayari and Poetry Night event",
        "✨ Created platform for artistic expression",
        "🎪 Managed cultural programming and logistics",
        "💫 Celebrated the power of words and emotions",
      ],
      photos: [
        {
          url: "./src/assets/tatva1.jpeg",
          caption: "Saam-e-Lawza poetry night stage",
        },
        {
          url: "./src/assets/tatva2.jpeg",
          caption: "Audience enjoying poetic performances",
        },
        {
          url: "./src/assets/tatva3.jpeg",
          caption: "Cultural expression through poetry",
        },
      ],
      icon: Mic,
      color: "from-indigo-600 to-purple-500",
      achievements: ["Event Leadership", "Cultural Programming"],
      links: {
        highlights: "#",
        photos: "#",
      },
    },
    {
      id: 6,
      title: "Vishal Batra's Pride",
      role: "Organizer & Volunteer",
      organization: "Memorial Initiative",
      date: "2024",
      location: "Regional Event",
      type: "Community",
      description:
        "Organized and volunteered for Vishal Batra's Pride, a tribute to courage, sacrifice, and the unwavering spirit of our heroes. This initiative was more than just an event—it reinforced the power of teamwork, dedication, and purpose-driven action.",
      highlights: [
        "🎖️ Honored military heroes and their sacrifices",
        "🤝 Organized memorial tribute event",
        "💪 Demonstrated teamwork and dedication",
        "🎯 Purpose-driven community action",
        "❤️ Paid respects to national heroes",
      ],
      photos: [
        {
          url: "./src/assets/vishal1.jpeg",
          caption: "Memorial tribute ceremony",
        },
        {
          url: "./src/assets/vishal2.jpeg",
          caption: "Community volunteers in action",
        },
        {
          url: "./src/assets/vishal3.jpeg",
          caption: "Honoring our heroes together",
        },
      ],
      icon: Heart,
      color: "from-red-600 to-pink-500",
      achievements: ["Community Leadership", "Memorial Organization"],
      links: {
        tribute: "#",
        gallery: "#",
      },
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Hackathon":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Community":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Cultural":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  const PhotoModal = ({
    photo,
    caption,
    onClose,
  }: {
    photo: string;
    caption: string;
    onClose: () => void;
  }) => (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl max-h-[95vh] bg-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
        <img
          src={photo}
          alt={caption}
          className="w-full h-full object-cover"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white text-lg font-medium">{caption}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
        >
          ✕
        </button>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="text-yellow-400 animate-pulse" size={32} />
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                Experience & Achievements
              </h2>
              <Sparkles className="text-yellow-400 animate-pulse" size={32} />
            </div>
            <p className="text-slate-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              My journey through transformative tech events, cultural
              celebrations, and community initiatives that have shaped my
              development career and leadership skills
            </p>
            <div className="flex justify-center gap-2 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          {/* Events Grid */}
          <div className="space-y-20">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`group relative transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(event.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Timeline Connection */}
                  {index !== events.length - 1 && (
                    <div className="absolute left-1/2 bottom-0 w-0.5 h-20 bg-gradient-to-b from-slate-500 via-slate-600 to-transparent transform -translate-x-1/2 translate-y-full hidden lg:block"></div>
                  )}

                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-start ${
                      isEven ? "" : "lg:grid-flow-col-dense"
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`${
                        isEven ? "lg:order-1" : "lg:order-2"
                      } space-y-6`}
                    >
                      <div
                        className={`bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-700 overflow-hidden shadow-2xl hover:shadow-blue-500/10 ${
                          hoveredCard === event.id
                            ? "transform scale-[1.02] border-blue-500/70 shadow-blue-500/20"
                            : ""
                        }`}
                      >
                        <div className="p-8">
                          {/* Header */}
                          <div className="flex items-start gap-6 mb-8">
                            <div
                              className={`p-4 rounded-2xl bg-gradient-to-r ${
                                event.color
                              } shadow-lg transition-all duration-500 ${
                                hoveredCard === event.id
                                  ? "scale-110 rotate-3"
                                  : ""
                              }`}
                            >
                              <IconComponent size={32} className="text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span
                                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${getTypeColor(
                                    event.type
                                  )} ${
                                    hoveredCard === event.id ? "scale-105" : ""
                                  }`}
                                >
                                  {event.type}
                                </span>
                                <div className="flex items-center gap-2 text-slate-400 text-sm hover:text-slate-300 transition-colors">
                                  <Calendar size={16} />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-sm hover:text-slate-300 transition-colors">
                                  <MapPin size={16} />
                                  <span>{event.location}</span>
                                </div>
                              </div>
                              <h3
                                className={`text-3xl font-bold text-white mb-3 transition-all duration-300 ${
                                  hoveredCard === event.id
                                    ? "text-blue-400 transform translate-x-2"
                                    : ""
                                }`}
                              >
                                {event.title}
                              </h3>
                              <p className="text-blue-400 font-semibold text-lg mb-2">
                                {event.role}
                              </p>
                              <p className="text-slate-300 font-medium text-lg">
                                {event.organization}
                              </p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                            {event.description}
                          </p>

                          {/* Achievements */}
                          {event.achievements && (
                            <div className="mb-8">
                              <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-lg">
                                <Trophy
                                  size={20}
                                  className="text-yellow-400 animate-pulse"
                                />
                                Achievements
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {event.achievements.map((achievement, i) => (
                                  <span
                                    key={i}
                                    className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30 transition-all duration-300 hover:scale-105 hover:bg-yellow-500/30"
                                  >
                                    {achievement}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Highlights */}
                          <div className="mb-8">
                            <h4 className="text-white font-semibold mb-5 flex items-center gap-2 text-lg">
                              <Award size={20} className="text-blue-400" />
                              Key Highlights
                            </h4>
                            <div className="grid gap-4">
                              {event.highlights.map(
                                (highlight, highlightIndex) => (
                                  <div
                                    key={highlightIndex}
                                    className="flex items-start gap-4 text-slate-300 p-4 bg-slate-700/30 rounded-xl border border-slate-700/50 transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600/50 hover:transform hover:translate-x-2"
                                  >
                                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                                    <span className="leading-relaxed text-lg">
                                      {highlight}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* Links */}
                          {event.links && (
                            <div className="flex flex-wrap gap-4">
                              {Object.entries(event.links).map(([key, url]) => (
                                <a
                                  key={key}
                                  href={url}
                                  className="inline-flex items-center gap-3 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium border border-slate-600/50 hover:border-blue-500/50 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                                >
                                  {key === "github" ? (
                                    <Github size={16} />
                                  ) : (
                                    <ExternalLink size={16} />
                                  )}
                                  {key.charAt(0).toUpperCase() + key.slice(1)}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Gradient Border Effect */}
                        <div
                          className={`h-2 bg-gradient-to-r ${
                            event.color
                          } transition-all duration-700 ${
                            hoveredCard === event.id
                              ? "opacity-100 animate-pulse"
                              : "opacity-0"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Photo Gallery */}
                    <div
                      className={`${
                        isEven ? "lg:order-2" : "lg:order-1"
                      } space-y-6`}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Camera
                          size={24}
                          className="text-blue-400 animate-pulse"
                        />
                        <h4 className="text-white font-semibold text-xl">
                          Event Gallery
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        {event.photos.map((photo, photoIndex) => (
                          <div
                            key={photoIndex}
                            className="group relative overflow-hidden rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-700 cursor-pointer hover:transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20"
                            onClick={() => setSelectedPhoto(photo.url)}
                          >
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={photo.url}
                                alt={photo.caption}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                              />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                  {photo.caption}
                                </p>
                              </div>
                            </div>

                            {/* Hover Icon */}
                            <div className="absolute top-6 right-6 p-3 bg-black/60 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                              <ExternalLink size={20} className="text-white" />
                            </div>

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-32">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
              {/* Left Content - Reduced size */}
              <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-10 md:p-12 w-full md:w-2/3 shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 hover:transform hover:scale-[1.02]">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Ready to Collaborate?
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    I'm always excited to participate in innovative events,
                    hackathons, and tech communities. Let's connect and build
                    something extraordinary together!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 text-base"
                  >
                    Get In Touch
                  </button>
                  <button
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-8 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl font-semibold text-white hover:bg-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-base"
                  >
                    View My Work
                  </button>
                </div>
              </div>
              {/* Right Space for Globe */}
              
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl backdrop-blur-lg border border-slate-700/50">
                  <Globe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          caption={
            events
              .find((e) => e.photos.some((p) => p.url === selectedPhoto))
              ?.photos.find((p) => p.url === selectedPhoto)?.caption || ""
          }
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
};

export default Experience;
