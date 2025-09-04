import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitMessage(""); // clear message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await emailjs.sendForm(
        "service_6yqk3gq", // <-- Replace with your EmailJS Service ID
        "template_ztvhe32", // <-- Replace with your EmailJS Template ID
        formRef.current,
        "M3qvaVvHgBP142DWt" // <-- Replace with your EmailJS Public Key
      );
      setSubmitMessage("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sumitsharma11454@gmail.com",
      href: "mailto:sumitsharma11454@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX",
      description: "Available for calls",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      description: "Available for remote work",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sumitsharma7284",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sumit-sharma-994902320",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="text-blue-400" size={24} />
                Get in Touch
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you have a question or just want to
                say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={info.label}
                      className={`group transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-10"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <a
                        href={info.href}
                        className="flex items-start group hover:text-blue-400 transition-colors duration-300 p-4 rounded-xl hover:bg-slate-800/50"
                      >
                        <div className="p-3 bg-slate-800 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors duration-300 flex-shrink-0">
                          <IconComponent size={20} className="text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 mb-1">
                            {info.label}
                          </p>
                          <p className="text-white font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-xs text-slate-500">
                            {info.description}
                          </p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
              {/* Availability Status */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">
                    Available for new projects
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Currently accepting new opportunities and collaborations.
                  Let's discuss your project ideas.
                </p>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 ${social.color} group`}
                      aria-label={social.label}
                    >
                      <IconComponent
                        size={20}
                        className="group-hover:scale-110 transition-transform duration-200"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                autoComplete="off"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-colors duration-300"
                      placeholder="Sumit Sharma"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-colors duration-300"
                      placeholder="Sumit@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-colors duration-300"
                    placeholder="Project Inquiry, Collaboration, etc."
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project, ideas, or any questions you have."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
                {submitMessage && (
                  <div
                    className={`mt-4 text-center font-medium ${
                      submitMessage.startsWith("Thank")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
