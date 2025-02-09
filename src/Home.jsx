import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import photo from './assets/myimage.jpg';

const Home = () => {
  return (
    <div className="min-h-screen p-12 mb-24">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-green-500 mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
              Harihareshwar D P
            </h2>
            <h3 className="text-2xl md:text-3xl text-green-400 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Backend Developer
            </h3>
            <p className="text-gray-300 text-lg mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Backend developer with expertise in building scalable and efficient
              server-side applications. Specialized in API development.
            </p>
            <p className="text-gray-300 text-lg mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              The role of backend developers is often underappreciated, despite the
              critical work involved in managing databases, server logic, and ensuring
              seamless integration with frontend systems. Our contributions are vital
              to the overall functionality and performance of applications.
            </p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a href="https://github.com/Harihareshwar1" 
              target='_blank'
                className="text-green-500 hover:text-green-400 text-3xl">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/harihareshwar-d-p-a92369293/" 
               target='_blank'
                className="text-green-500 hover:text-green-400 text-3xl">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 mx-auto border-4 border-green-500">
              <img
                src={photo} // Update this path to your image
                alt="Harihareshwar D P"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Introduction Section */}
        

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-green-500 mb-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-2" style={{ fontFamily: 'Pacifico, cursive' }}>B.E (CSE- AIML)</h3>
              <p className="text-gray-300 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Sri Eshwar College of Engineering <br />
                CGPA: 8.81 (upto 2nd sem) <br />
                2023 - 2027
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-2" style={{ fontFamily: 'Pacifico, cursive' }}>HSC</h3>
              <p className="text-gray-300 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                PMG Matric Higher Secondary School <br />
                95% <br />
                2021 - 2023
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-2" style={{ fontFamily: 'Pacifico, cursive' }}>SSLC</h3>
              <p className="text-gray-300 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                PMG Matric Higher Secondary School <br />
                100% <br />
                2020 - 2021
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;