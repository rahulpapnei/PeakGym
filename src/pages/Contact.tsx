import React, { useState } from 'react';
import { Mail, Phone, MapPin, X, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setShowThankYou(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 navbar-spacing">
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="text-gray-600">
              We've received your message and will get back to you shortly. Thank you for choosing TrenD!
            </p>
          </div>
        </div>
      )}

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
        <p className="text-xl text-secondary max-w-3xl mx-auto">
          Have questions? We're here to help! Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Location</h3>
              <p className="text-secondary">
                123 Fitness Street<br />
                Gym City, GC 12345
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Phone</h3>
              <p className="text-secondary">
                +1 (555) 123-4567<br />
                Available 24/7
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Email</h3>
              <p className="text-secondary">
                info@peakgym.com<br />
                support@peakgym.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Hours</h3>
              <p className="text-secondary">
                Monday - Friday: 5:00 AM - 11:00 PM<br />
                Saturday - Sunday: 6:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg shadow border border-border">
          <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-background px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155710122!2d-73.9878448!3d40.7579887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645555555555!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Contact;