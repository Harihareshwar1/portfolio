import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/Harihareshwar1',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/harihareshwar-d-p-a92369293/',
      color: 'hover:text-blue-500'
    },
    
  ];

  return (
    <motion.div
      className="min-h-screen p-12 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-green-500 rounded-full opacity-20"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div 
            className="text-6xl mb-6 text-green-500"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FontAwesomeIcon icon={faHandshake} />
          </motion.div>
          <h2 className="text-4xl font-bold text-green-500 mb-4">Let's Collaborate!</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always excited to work on innovative projects and connect with fellow developers.
            Whether you have a project idea or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-green-500 mb-6 text-center">Connect With Me</h3>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl text-gray-300 ${link.color} transition-colors duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={link.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-green-500 text-white rounded-lg text-xl font-bold hover:bg-green-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'mailto:harihareshwar08@gmail.com'}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
