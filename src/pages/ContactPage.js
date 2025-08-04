import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollIndicator from '../components/ScrollIndicator';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '', 
        budget: '', 
        timeline: '' 
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const contactInfo = [
    {
      icon: '💬',
      title: 'Chat With Us',
      details: 'Average response time: 2 hours',
      action: 'mailto:hello@momentum.com',
      color: '#667eea',
      description: 'Get instant answers to your questions'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: '#f093fb',
      description: 'Speak directly with our team'
    },
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: '123 Innovation Street, Tech City',
      action: null,
      color: '#4facfe',
      description: 'Schedule an in-person meeting'
    },
    {
      icon: '🌐',
      title: 'Follow Us',
      details: 'Stay updated on social media',
      action: null,
      color: '#fa709a',
      description: 'Connect with us online'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most projects are completed within 4-12 weeks. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'What\'s included in your services?',
      answer: 'Our services include strategy, design, development, testing, launch, and ongoing support. We provide a comprehensive solution from concept to completion.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes! We offer various support packages including maintenance, updates, hosting, and technical assistance to keep your project running smoothly.'
    },
    {
      question: 'What\'s your pricing structure?',
      answer: 'We offer both project-based and retainer pricing. Costs depend on project scope, complexity, and timeline. Contact us for a detailed quote.'
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.div 
      className="contact-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="contact-hero" data-section="Contact" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-pattern" />
          <div className="hero-gradient" />
        </div>
        <motion.div 
          className="contact-content"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            💬 Let's Start a Conversation
          </motion.div>
          <h1>
            Ready to <span className="gradient-text">Transform</span>
            <br />Your Digital Vision?
          </h1>
          <p className="lead">
            Whether you're starting from scratch or enhancing an existing project, 
            we're here to help bring your ideas to life. Let's discuss your goals and create something extraordinary.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">&lt;24h</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Free</span>
              <span className="stat-label">Initial Consultation</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Confidential</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-main" data-section="Get In Touch">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info-section">
            <motion.div
              className="section-header"
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={contentVariants}
            >
              <h2>How Can We Help?</h2>
              <p>Choose the best way to connect with our team</p>
            </motion.div>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 40 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="info-icon-wrapper" style={{ backgroundColor: `${info.color}15` }}>
                    <div className="info-icon" style={{ color: info.color }}>{info.icon}</div>
                  </div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    <p className="info-description">{info.description}</p>
                    {info.action ? (
                      <a href={info.action} className="info-link" style={{ color: info.color }}>
                        {info.details}
                      </a>
                    ) : (
                      <p className="info-details">{info.details}</p>
                    )}
                  </div>
                  <div className="info-accent" style={{ backgroundColor: info.color }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section" ref={formRef}>
            <motion.div
              className="form-container"
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={contentVariants}
            >
              <div className="form-header">
                <h2>Tell Us About Your Project</h2>
                <p>The more details you provide, the better we can help you</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <motion.div 
                    className="form-group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="form-group"
                    initial={{ opacity: 0, x: 30 }}
                    animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </motion.div>
                </div>

                <div className="form-row">
                  <motion.div 
                    className="form-group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </motion.div>
                  
                  <motion.div 
                    className="form-group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label htmlFor="timeline">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-plus-months">6+ months</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="subject">Project Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief project title or type"
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project goals, challenges, and any specific requirements..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="button-icon">📨</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" data-section="FAQ" ref={faqRef}>
        <div className="faq-container">
          <motion.div
            className="section-header"
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Get quick answers to common questions about our services</p>
          </motion.div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <motion.div
                  className="faq-answer"
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta" data-section="Schedule Call">
        <div className="cta-background">
          <div className="cta-pattern" />
        </div>
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Prefer a Personal Touch?</h2>
          <p>Schedule a free 30-minute consultation to discuss your project in detail</p>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="feature-icon">✅</span>
              <span>No commitment required</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">🎯</span>
              <span>Tailored recommendations</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">💡</span>
              <span>Expert insights</span>
            </div>
          </div>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Free Consultation
            <span className="button-icon">📅</span>
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ContactPage;