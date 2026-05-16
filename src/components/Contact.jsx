import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = '917010462220'; // Replace with your number

    const text = `👋 Hello Bhuvaneshwari,\n\n📛 Name: ${formData.name}\n\n📧 Email: ${formData.email}\n\n📝 Message:\n${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="contact container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <h2 className="gradient-text">Get In Touch</h2>
        <div className="underline"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="contact-wrapper glass"
      >
        <div className="contact-info">
          <h3>Let's collaborate!</h3>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

          <div className="contact-links">
            {['📧', '🔗', '💻'].map((icon, idx) => {
              const links = [
                { label: 'Email', value: 'bhuvanam66s@gmail.com', href: 'mailto:bhuvanam66s@gmail.com' },
                { label: 'LinkedIn', value: 'Connect with me on LinkedIn', href: 'https://www.linkedin.com/in/bhuvaneshwari-mohan-5b780034a' },
                { label: 'GitHub', value: 'Connect with me on GitHub', href: 'https://github.com/Bhuv-tech' }
              ];
              const item = links[idx];
              return (
                <motion.a 
                  key={idx}
                  href={item.href} 
                  className="contact-item"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <span className="icon">{icon}</span>
                  <div className="details">
                    <span className="label">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <form className="contact-form" onSubmit={sendToWhatsApp}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <motion.button 
            type="submit" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
