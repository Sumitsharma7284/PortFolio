import React, { useEffect, useState, useRef } from "react";
import {
  ExternalLink,
  Github,
  ChevronRight,
  Star,
  Eye,
  GitFork,
  Play,
  Code2,
  Zap,
  Award,
  TrendingUp,
  Users,
  Calendar,
  Clock,
} from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLSection>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "all", label: "All Projects", icon: Code2 },
    { id: "ai", label: "AI & ML", icon: Zap },
    { id: "web", label: "Web Apps", icon: ExternalLink },
    { id: "mobile", label: "Mobile", icon: Play },
    { id: "testing", label: "Testing", icon: Award },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "from-emerald-500 to-green-600";
      case "in-progress":
        return "from-blue-500 to-cyan-600";
      case "planned":
        return "from-amber-500 to-orange-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Live";
      case "in-progress":
        return "Beta";
      case "planned":
        return "Soon";
      default:
        return "Unknown";
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">
                Featured Work
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium mt-2">
              Innovation in Code
            </h2>

            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore my journey through cutting-edge projects that push the
              boundaries of technology, from AI-powered solutions to scalable
              web applications.
            </p>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`group relative px-6 py-4 rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 ${
                    filter === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25"
                      : "bg-slate-800/60 backdrop-blur-sm text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-600/50 hover:border-blue-500/50"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      size={18}
                      className={`transition-all duration-300 ${
                        filter === category.id
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    />
                    <span>{category.label}</span>
                  </div>

                  {filter === category.id && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-30 -z-10"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Enhanced Project Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-700 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Image Container with Enhanced Effects */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`bg-gradient-to-r ${getStatusColor(
                        project.status
                      )} text-white text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1 shadow-lg`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      {getStatusLabel(project.status)}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium capitalize border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-white border border-white/20">
                      <Star size={12} className="text-yellow-400" />
                      <span className="font-medium">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-white border border-white/20">
                      <Eye size={12} className="text-blue-400" />
                      <span className="font-medium">{project.stats.views}</span>
                    </div>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Enhanced Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-lg text-xs font-medium border border-blue-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-3 py-1.5 bg-slate-700/50 text-slate-400 rounded-lg text-xs">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-700/60 text-slate-300 rounded-full text-xs border border-slate-600/50 group-hover:border-blue-500/30 transition-all duration-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1.5 bg-slate-700/60 text-slate-400 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Enhanced Action Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 text-sm group/link font-medium"
                      >
                        <ExternalLink
                          size={16}
                          className="mr-2 group-hover/link:scale-110 transition-transform duration-200"
                        />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-400 hover:text-white transition-all duration-300 text-sm group/link font-medium"
                      >
                        <Github
                          size={16}
                          className="mr-2 group-hover/link:scale-110 transition-transform duration-200"
                        />
                        Source Code
                      </a>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/50 to-purple-600/50 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 group text-white"
              >
                <Github
                  size={20}
                  className="mr-3 group-hover:scale-110 transition-transform duration-200"
                />
                View All Projects
                <ExternalLink
                  size={18}
                  className="ml-3 group-hover:scale-110 transition-transform duration-200"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/80 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 border border-slate-600/50 hover:border-blue-500/50 group text-white"
              >
                <Users
                  size={20}
                  className="mr-3 group-hover:scale-110 transition-transform duration-200"
                />
                Let's Collaborate
              </a>
            </div>

            <p className="text-slate-400 mt-6 text-sm">
              Interested in working together? Let's discuss your next project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
