import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollIndicator from '../components/ScrollIndicator';
import './ServicesPage.css';

const ServicesPage = () => {
  const [clickedCard, setClickedCard] = React.useState(null);
  const [expandedCard, setExpandedCard] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
    rootMargin: '50px'
  });

  const { ref: processRef, inView: processInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge technologies that drive results',
      features: ['React/Next.js/Vue', 'Mobile-First Design', 'Performance Optimization', 'SEO & Analytics'],
      icon: '🌐',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      price: 'From $2,999',
      popular: false
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that converts visitors into customers and creates memorable experiences',
      features: ['User Research & Testing', 'Wireframing & Prototyping', 'Design Systems', 'Conversion Optimization'],
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      price: 'From $1,999',
      popular: true
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand packages that make you stand out and connect with your audience',
      features: ['Logo & Visual Identity', 'Brand Guidelines', 'Marketing Materials', 'Digital Asset Library'],
      icon: '✨',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      price: 'From $1,499',
      popular: false
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence and maximize ROI',
      features: ['Social Media Strategy', 'Content Marketing', 'SEO & SEM', 'Analytics & Reporting'],
      icon: '📈',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      price: 'From $999/mo',
      popular: false
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores that drive sales and provide exceptional shopping experiences',
      features: ['Shopify/WooCommerce', 'Payment Integration', 'Inventory Management', 'Customer Analytics'],
      icon: '🛒',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      price: 'From $3,999',
      popular: false
    },
    {
      title: 'Strategic Consulting',
      description: 'Expert guidance to accelerate your digital transformation and business growth',
      features: ['Digital Strategy', 'Technology Audit', 'Growth Planning', 'Team Training'],
      icon: '💡',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      price: 'From $199/hr',
      popular: false
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences',
      features: ['iOS & Android', 'React Native', 'App Store Optimization', 'Push Notifications'],
      icon: '📱',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      price: 'From $4,999',
      popular: false
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps Setup', '24/7 Monitoring'],
      icon: '☁️',
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      price: 'From $1,299/mo',
      popular: false
    }
  ];

  const processSteps = [
    { 
      step: '01', 
      title: 'Discovery & Strategy', 
      description: 'We dive deep into understanding your business, goals, and target audience to create a tailored approach',
      icon: '🔍'
    },
    { 
      step: '02', 
      title: 'Design & Planning', 
      description: 'Our team creates detailed wireframes, mockups, and technical specifications for your project',
      icon: '📐'
    },
    { 
      step: '03', 
      title: 'Development & Testing', 
      description: 'We build your solution using best practices, with rigorous testing at every stage',
      icon: '⚡'
    },
    { 
      step: '04', 
      title: 'Launch & Optimization', 
      description: 'We deploy your project and continuously monitor and optimize for peak performance',
      icon: '🚀'
    },
    { 
      step: '05', 
      title: 'Growth & Support', 
      description: 'Ongoing support, maintenance, and strategic guidance to ensure long-term success',
      icon: '📊'
    }
  ];

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

  return (
    <motion.div 
      className="services-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="services-hero" data-section="Services" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-pattern" />
          <div className="hero-gradient" />
        </div>
        <motion.div 
          className="services-content"
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
            🚀 Comprehensive Digital Solutions
          </motion.div>
          <h1>
            Services That <span className="gradient-text">Transform</span>
            <br />Your Digital Presence
          </h1>
          <p className="lead">
            From concept to launch, we offer end-to-end digital solutions that help your business 
            thrive in the modern world. Our expert team delivers results that exceed expectations.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section" data-section="What We Do" ref={servicesRef}>
        <div className="services-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>What We Do</h2>
            <p>Comprehensive digital solutions tailored to your unique business needs</p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`service-card ${service.popular ? 'popular' : ''} ${clickedCard === index ? 'clicked' : ''} ${isMobile ? 'mobile' : ''} ${expandedCard === index ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 60 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={!isMobile ? { 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                } : {}}
                onClick={() => {
                  if (isMobile) {
                    setExpandedCard(expandedCard === index ? null : index);
                  } else {
                    setClickedCard(index === clickedCard ? null : index);
                  }
                }}
                style={{ visibility: 'visible' }}
              >
                {service.popular && !isMobile && <div className="popular-badge">Most Popular</div>}
                
                <div className="service-summary" style={{ background: isMobile ? service.gradient : 'transparent' }}>
                  <div className="summary-content">
                    <div className="service-icon">{service.icon}</div>
                    <div className="summary-info">
                      <h3>{service.title}</h3>
                      <p className="mobile-description">{service.description}</p>
                    </div>
                    <div className="service-price">{service.price}</div>
                    {isMobile && (
                      <motion.div 
                        className="expand-icon"
                        animate={{ rotate: expandedCard === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▼
                      </motion.div>
                    )}
                  </div>
                </div>
                
                <motion.div 
                  className="service-details"
                  initial={false}
                  animate={{ 
                    height: isMobile && expandedCard === index ? 'auto' : (isMobile ? 0 : 'auto'),
                    opacity: isMobile && expandedCard === index ? 1 : (isMobile ? 0 : 1)
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  {!isMobile && (
                    <div className="service-header" style={{ background: service.gradient }}>
                      <div className="service-icon">{service.icon}</div>
                      <div className="service-price">{service.price}</div>
                    </div>
                  )}
                  <div className="service-body">
                    {!isMobile && (
                      <>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </>
                    )}
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <motion.button 
                      className="service-cta"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process" data-section="Our Process" ref={processRef}>
        <div className="process-container">
          <motion.div
            className="section-header"
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <h2>Our Proven Process</h2>
            <p>A systematic approach that ensures every project delivers exceptional results</p>
          </motion.div>
          
          <div className="process-timeline">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="step-marker">
                  <div className="step-number">{item.step}</div>
                  <div className="step-icon">{item.icon}</div>
                </div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                {index < processSteps.length - 1 && <div className="step-connector" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta" data-section="Start Project">
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
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let's discuss how our services can help bring your vision to life and drive real results</p>
          <div className="cta-buttons">
            <motion.a 
              href="/contact" 
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <span className="button-icon">🚀</span>
            </motion.a>
            <motion.a 
              href="/about" 
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;