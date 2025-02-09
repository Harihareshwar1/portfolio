import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faHtml5, faCss3, faJs, faJava, faReact, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import cImage from './assets/c.png';
import cppImage from './assets/cpp.png';
import numpyImage from './assets/numpy.png';
import pandasImage from './assets/pandas.png';
import matplotlibImage from './assets/matplotlib.png';
import flaskImage from './assets/flask.png';
import djangoImage from './assets/django.png';
import gitImage from './assets/git.png';
import vscodeImage from './assets/vscode.png';
import colabImage from './assets/colab.png';
import postmanImage from './assets/postman.png';
import mysqlImage from './assets/mysql.png';
import mongodbImage from './assets/mongodb.png';

const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'C', image: cImage, color: 'text-blue-500' },
      { name: 'C++', image: cppImage, color: 'text-blue-500' },
      { name: 'Python', icon: faPython, color: 'text-yellow-500' },
      { name: 'HTML', icon: faHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: faCss3, color: 'text-blue-500' },
      { name: 'JavaScript', icon: faJs, color: 'text-yellow-500' },
      { name: 'Java', icon: faJava, color: 'text-red-500' },
    ],
  },
  {
    category: 'Libraries/Frameworks',
    skills: [
      { name: 'Numpy', image: numpyImage, color: 'text-green-500' },
      { name: 'Pandas', image: pandasImage, color: 'text-green-500' },
      { name: 'Matplotlib', image: matplotlibImage, color: 'text-green-500' },
      { name: 'Flask', image: flaskImage, color: 'text-green-500' },
      { name: 'Django', image: djangoImage, color: 'text-green-500' },
      { name: 'Node', icon: faNodeJs, color: 'text-green-500' },
      { name: 'Scikit-learn', icon: faPython, color: 'text-green-500' },
      { name: 'Express', icon: faNodeJs, color: 'text-green-500' },
      { name: 'React', icon: faReact, color: 'text-blue-500' },
    ],
  },
  {
    category: 'Tools/Platforms',
    skills: [
      { name: 'GitHub', icon: faGithub, color: 'text-black' },
      { name: 'GIT', image: gitImage, color: 'text-black' },
      { name: 'VS Code', image: vscodeImage, color: 'text-blue-500' },
      { name: 'Google Colab', image: colabImage, color: 'text-yellow-500' },
      { name: 'Postman', image: postmanImage, color: 'text-orange-500' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', image: mysqlImage, color: 'text-blue-500' },
      { name: 'MongoDB', image: mongodbImage, color: 'text-green-500' },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skillCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, 0],
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
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const imageVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen p-12 mb-24 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Animation */}
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
        {skillsData.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-12"
            variants={categoryVariants}
          >
            <motion.h2 
              className="text-3xl font-bold text-green-500 mb-6"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgb(34, 197, 94)"
              }}
            >
              {category.category}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-center
                            border border-gray-700 hover:border-green-500 transition-colors duration-300"
                  variants={skillCardVariants}
                  whileHover="hover"
                >
                  {skill.icon ? (
                    <motion.div variants={iconVariants} whileHover="hover">
                      <FontAwesomeIcon 
                        icon={skill.icon} 
                        className={`text-4xl ${skill.color} mr-4`}
                      />
                    </motion.div>
                  ) : (
                    <motion.div variants={imageVariants} whileHover="hover">
                      <motion.img 
                        src={skill.image} 
                        alt={skill.name} 
                        className="w-12 h-12 mr-4 object-contain"
                      />
                    </motion.div>
                  )}
                  <span className="text-white text-xl">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
