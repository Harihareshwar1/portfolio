import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faCube, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import udemyImage from './assets/udemy.png';
import greatLearningImage from './assets/greatlearning.png';
import kaggleImage from './assets/kaggle.png';
import pythonCert from './assets/python_cert.jpg';
import cppCert from './assets/cpp_cert.jpg';
import mlCert from './assets/ml_cert.jpg';
import pandasCert from './assets/pandas_cert.png';
import mat from './assets/mat.jpg'

Modal.setAppElement('#root');

const certificationsData = [
  {
    name: 'The Complete Python Pro Bootcamp',
    provider: 'UDEMY',
    year: '2024',
    icon: faPython,
    image: udemyImage,
    certImage: pythonCert,
  },
  {
    name: 'C++ Programming',
    provider: 'UDEMY',
    year: '2024',
    icon: faPython,
    image: udemyImage,
    certImage: cppCert,
  },
  {
    name: 'Python Matplotlib',
    provider: 'GREAT LEARNING',
    year: '2023',
    icon: faCube,
    image: greatLearningImage,
    certImage: mat,
  },
  {
    name: 'Machine Learning',
    provider: 'UDEMY',
    year: '2024',
    icon: faPython,
    image: udemyImage,
    certImage: mlCert,
  },
  {
    name: 'Pandas Basics',
    provider: 'KAGGLE',
    year: '2024',
    icon: faDatabase,
    image: kaggleImage,
    certImage: pandasCert,
  },
];

const Certifications = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (certImage) => {
    setSelectedCert(certImage);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCert(null);
  };

  const cardVariants = {
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
      boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1f2937',
      border: '1px solid #22c55e',
      borderRadius: '0.5rem',
      padding: '2rem',
      maxWidth: '90vw',
      maxHeight: '90vh',
      overflow: 'auto'
    }
  };

  return (
    <motion.div 
      className="min-h-screen p-12 mb-24 relative"
      initial="hidden"
      animate="visible"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-green-500 rounded-full opacity-10"
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
          className="text-4xl font-bold text-green-500 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((certification, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg
                        border border-gray-700 hover:border-green-500 transition-all duration-300
                        flex flex-col items-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.img 
                src={certification.image} 
                alt={certification.provider} 
                className={`mb-4 object-contain ${certification.provider === 'UDEMY' ? 'w-24' : 'w-16'} h-16`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h3 className="text-xl font-bold text-green-500 mb-2 text-center">{certification.name}</h3>
              <p className="text-gray-300 mb-2">{certification.provider}</p>
              <p className="text-gray-300">{certification.year}</p>
              <motion.button 
                onClick={() => openModal(certification.certImage)} 
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg
                          hover:bg-green-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificate
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Certification Image"
      >
        <div className="relative">
          <motion.button
            className="absolute top-2 right-2 text-green-500 hover:text-green-400 text-xl"
            onClick={closeModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </motion.button>
          <motion.img 
            src={selectedCert} 
            alt="Certification"
            className="max-w-full h-auto rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </Modal>
    </motion.div>
  );
};

export default Certifications;
