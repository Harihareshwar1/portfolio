import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRobot, faMobileAlt, faBook, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons';

const projectsData = [
  {
    title: 'BookQuest',
    year: '2025',
    description: 'A full-stack web application for book enthusiasts featuring Google Sign-In integration. Users can search books via Google Books API, maintain reading lists, track reading status, and receive personalized book recommendations based on their reading history. Built to cultivate reading habits through an engaging and user-friendly interface.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Google OAuth', 'Google Books API'],
    icon: faBook,
    color: 'from-indigo-500 to-purple-500',
    liveDemo: 'https://bookquest-lovat.vercel.app/',
    techIcons: [faReact, faNode, faDatabase]
  },
  {
    title: 'IMAGE CAPTION GENERATOR',
    year: '2024',
    description: 'Built a web-based image captioning tool with a user-friendly interface. Generates descriptive captions for input images based on visual features extracted by a machine learning model.',
    techStack: ['Python', 'Streamlit', 'CNN', 'LSTM'],
    icon: faRobot,
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'STEALTH WATCH',
    year: '2024',
    description: 'A real-time shoplifting detection system using object detection to monitor uploaded video footage. Upon detecting suspicious activity, sends alerts and initiates automated calls to notify authorities, enhancing retail security through seamless integration and responsiveness.',
    techStack: ['React', 'Flask', 'YOLOv8', 'OpenCV'],
    icon: faEye,
    color: 'from-green-500 to-blue-500'
  },
  {
    title: 'DRISHYA YATRA',
    year: '2024',
    description: 'Mobile application supporting ISL conversion in Gujarati, designed to enhance education for deaf and mute students in Gujarat. Converts Gujarati alphabets, numbers, and sentences into Indian Sign Language (ISL) and includes a text-to-image feature for ISL learning.',
    techStack: ['React-Native', 'Hugging Face', 'MediaPipe', 'Flask'],
    icon: faMobileAlt,
    color: 'from-yellow-500 to-red-500'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="min-h-screen p-12 mb-24 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background particles */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-green-500 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r ${project.color} p-1 rounded-xl hover:shadow-2xl`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="bg-gray-900 p-6 rounded-lg h-full">
                <div className="flex items-center mb-4">
                  <motion.div
                    className="mr-4 text-3xl text-white"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <FontAwesomeIcon icon={project.icon} />
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-green-400">{project.year}</p>
                  </div>
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <p className='text-white'>Live Demo</p>
                    </motion.a>
                  )}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.techIcons?.map((icon, i) => (
                    <motion.div
                      key={i}
                      className="text-2xl text-green-400"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
