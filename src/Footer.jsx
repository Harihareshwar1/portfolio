import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const iconVariants = {
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mt-20"
    >
      {/* Curved top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-full h-20">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,80 C150,150 350,0 500,100 L500,150 L0,150 Z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>

      <div className="bg-gray-900 text-green-500 py-10 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Copyright Section */}
            <motion.div
              className="text-center md:text-left"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm font-light">
                © {new Date().getFullYear()} 
                <span className="font-medium"> Harihareshwar D P</span>
              </p>
              <p className="text-xs text-green-400 mt-1">Building robust backends</p>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://github.com/Harihareshwar1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 text-2xl transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <FontAwesomeIcon icon={faGithub} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/harihareshwar-d-p-a92369293/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 text-2xl transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </motion.a>
              <motion.a
                href="mailto:harihareshwar08@gmail.com"
                className="hover:text-green-400 text-2xl transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </motion.a>
            </div>

            {/* Contact Info */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm text-green-400">Get in touch</p>
              <p className="text-xs mt-1">Coimbatore, TamilNadu</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Border */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent"
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;