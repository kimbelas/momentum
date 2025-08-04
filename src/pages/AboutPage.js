import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollIndicator from '../components/ScrollIndicator';
import './AboutPage.css';

const AboutPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: storyRef, inView: storyInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: '🚀', description: 'Successfully delivered projects', color: '#667eea' },
    { number: '50+', label: 'Happy Clients', icon: '😊', description: 'Satisfied clients worldwide', color: '#f093fb' },
    { number: '5+', label: 'Years Experience', icon: '⭐', description: 'Industry expertise', color: '#4facfe' },
    { number: '15+', label: 'Team Members', icon: '👥', description: 'Talented professionals', color: '#fa709a' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver tomorrow\'s solutions today.',
      icon: '💡',
      color: '#667eea'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships through transparent communication and dedicated support.',
      icon: '🤝',
      color: '#f093fb'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring robust, scalable, and beautiful solutions.',
      icon: '⭐',
      color: '#4facfe'
    },
    {
      title: 'Continuous Growth',
      description: 'We never stop learning and evolving, staying ahead of industry trends and emerging technologies.',
      icon: '📈',
      color: '#fa709a'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Started as a small team with big dreams and a passion for creating digital experiences.',
      milestone: 'Founded'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Landed our first enterprise client and delivered a transformative digital solution.',
      milestone: 'Growth'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to 10+ talented professionals across design, development, and strategy.',
      milestone: 'Scale'
    },
    {
      year: '2022',
      title: 'Award Recognition',
      description: 'Received industry recognition for outstanding web design and development excellence.',
      milestone: 'Recognition'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded our services globally, working with clients across 5+ countries.',
      milestone: 'Expansion'
    },
    {
      year: '2024',
      title: 'Innovation Lab',
      description: 'Launched our innovation lab focusing on AI, Web3, and next-generation technologies.',
      milestone: 'Innovation'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years in tech strategy and digital transformation.',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO',
      bio: 'Full-stack architect passionate about scalable solutions and emerging technologies.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative director with expertise in user experience and brand storytelling.',
      avatar: '👩‍🎨'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Senior engineer specializing in React, Node.js, and cloud architecture.',
      avatar: '👨‍🔧'
    }
  ];

  return (
    <motion.div
      className="about-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="about-hero" data-section="About Us" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-pattern" />
          <div className="hero-gradient" />
        </div>
        <motion.div
          className="hero-content"
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
            ✨ Crafting Digital Excellence Since 2019
          </motion.div>
          <h1>
            We Transform <span className="gradient-text">Visionary Ideas</span>
            <br />Into Digital <span className="gradient-text">Excellence</span>
          </h1>
          <p className="hero-description">
            We're a collective of visionary creators, strategic thinkers, and technical innovators 
            who craft digital experiences that don't just meet expectations—they redefine possibilities.
          </p>
          <div className="hero-actions">
            <motion.a
              href="#story"
              className="hero-cta primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Story
              <span className="cta-arrow">↓</span>
            </motion.a>
            <motion.a
              href="#team"
              className="hero-cta secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Meet the Team
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section" data-section="Our Impact" ref={statsRef}>
        <div className="stats-container">
          <motion.div
            className="stats-header"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <h2>Numbers That Tell Our Story</h2>
            <p>The impact we've made through dedication and excellence</p>
          </motion.div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}15` }}>
                  <div className="stat-icon" style={{ color: stat.color }}>{stat.icon}</div>
                </div>
                <div className="stat-content">
                  <div className="stat-number" style={{ color: stat.color }}>{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
                <div className="stat-accent" style={{ backgroundColor: stat.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Timeline Section */}
      <section id="story" className="story-section" data-section="Our Journey" ref={storyRef}>
        <div className="story-container">
          <motion.div
            className="story-header"
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <h2>Our Journey</h2>
            <p className="story-intro">
              From humble beginnings to industry recognition, here's how we've grown 
              into a trusted partner for digital transformation.
            </p>
          </motion.div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="timeline-marker">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <div className="timeline-milestone">{item.milestone}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" data-section="Our Values" ref={valuesRef}>
        <div className="values-container">
          <motion.div
            className="values-header"
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <h2>What Drives Us</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 60 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="value-icon" style={{ backgroundColor: `${value.color}15`, color: value.color }}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="value-accent" style={{ backgroundColor: value.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section" data-section="Our Team" ref={teamRef}>
        <div className="team-container">
          <motion.div
            className="team-header"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <h2>Meet the Visionaries Behind Momentum</h2>
            <p>
              Our diverse team of experts brings together creativity, technical excellence, 
              and strategic thinking to deliver exceptional results that exceed expectations.
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="team-avatar">{member.avatar}</div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p>{member.bio}</p>
                </div>
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn">💼</a>
                  <a href="#" aria-label="Twitter">🐦</a>
                  <a href="#" aria-label="Email">📧</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" data-section="Work With Us">
        <div className="cta-background">
          <div className="cta-pattern" />
        </div>
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Build Something Amazing Together?</h2>
          <p>
            Whether you're a startup with a bold vision or an enterprise looking to innovate, 
            we're here to turn your ideas into digital reality.
          </p>
          <div className="cta-actions">
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
              href="/services"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default AboutPage;