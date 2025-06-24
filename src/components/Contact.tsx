import React, { useState } from 'react';
import { Mail, Instagram, Send, MapPin, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzzgkbeb", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you! Your message has been sent successfully.');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 animate-slide-up">
            Contact Me
          </h2>
          <p className="text-xl font-inter text-secondary max-w-2xl mx-auto animate-slide-up">
            Ready to create something beautiful together? Let's discuss your vision 
            and bring your fashion dreams to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-inter font-medium text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 font-inter"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-inter font-medium text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 font-inter"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-inter font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 font-inter resize-none"
                  placeholder="How can we help you???"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-accent text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-accent/90 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-primary mb-1">Email</h4>
                  <a 
                    href="mailto:sunilkumar73584@gmail.com" 
                    className="text-secondary hover:text-accent transition-colors duration-200 font-inter"
                  >
                    sunilkumar73584@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-primary mb-1">Phone</h4>
                  <a 
                    href="tel:9818563384" 
                    className="text-secondary hover:text-accent transition-colors duration-200 font-inter"
                  >
                    +91 9818563384
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <SiWhatsapp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-primary mb-1">Studio</h4>
                  <p className="text-secondary font-inter">
                    Whatsapp<br />
                  </p>
                  <a href="https://wa.me/919818563384" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors duration-200 font-inter"
                  >
                    @ 9818563384
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-inter font-semibold text-primary mb-4">Follow My Work</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/sunilkumar73584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-teal to-accent text-white p-3 rounded-lg hover:scale-110 transition-all duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="mailto:sunilkumar73584@gmail.com"
                  className="bg-primary text-white p-3 rounded-lg hover:scale-110 transition-all duration-200"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-light rounded-lg">
              <blockquote className="text-lg font-playfair font-medium text-primary mb-3">
                "Style is a way to say who you are without having to speak."
              </blockquote>
              <cite className="text-accent font-inter font-semibold">- Rachel Zoe</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;