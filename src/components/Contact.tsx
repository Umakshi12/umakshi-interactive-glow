import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, MessageCircle, LinkedinIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "umakshisharma08@gmail.com",
      href: "mailto:umakshisharma08@gmail.com"
    },
    /*{
      icon: Phone,
      label: "Phone",
      value: "+91 9306774453",
      href: "tel:+919306774453"
    },*/
    {
      icon: MapPin,
      label: "Location",
      value: "Kurukshetra, Haryana, India",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Umakshi12",
      href: "https://github.com/Umakshi12"
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/umakshi-sharma-163302206",
      href: "https://www.linkedin.com/in/umakshi-sharma-163302206"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          {/* <h2 className="text-5xl md:text-6xl font-extralight mb-16 tracking-wider bg-clip-text text-transparent text-center"> */}
          {/* <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-wider"></h2> */}
          <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-wider bg-gradient-to-r from-gray-200 via-purple-200 to-gray-200 bg-clip-text text-transparent text-center">
            GET IN TOUCH
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're a recruiter, potential client, or fellow developer, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors">
                      <item.icon className="text-purple-400 group-hover:text-purple-300" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links or additional info */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Quick Response</h4>
                <p className="text-gray-300 text-sm">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to reach out via phone or LinkedIn.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
