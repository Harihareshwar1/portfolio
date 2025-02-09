import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import achievement2 from './assets/achievement2.jpg';
import achievement3 from './assets/achievement3.jpg';
import achievement4 from './assets/achievement4.jpg';
import achievement5 from './assets/achievement5.jpg';
import cImage from './assets/c.png';
import cppImage from './assets/cpp.png';
import leetcodeImage from './assets/leetcode.png';

const achievementsData = [
  {
    name: '1st Position in BUILDATHON – C Coding Contest',
    year: '2023',
    conductedAt: 'Sri Eshwar College of Engineering',
    image: achievement2,
  },
  {
    name: '2nd Position in FRESHATHON – Project Expo',
    year: '2024',
    conductedAt: 'Sri Eshwar College of Engineering',
    image: achievement3,
  },
  {
    name: '2nd Position in CODELEE – Leetcode Coding Contest',
    year: '2024',
    conductedAt: 'Sri Eshwar College of Engineering',
    image: achievement4,
  },
  {
    name: '1st Position in SKILLRACK CODING CONTEST',
    year: '2024',
    conductedAt: 'Sri Eshwar College of Engineering',
    image: achievement5,
  },
];

const hackerrankStars = [
  { name: 'C', stars: 4, image: cImage },
  { name: 'C++', stars: 1, image: cppImage },
  { name: 'Python', stars: 3, icon: faStar },
  { name: 'Java', stars: 1, icon: faStar },
];

const Achievements = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [leetcodeStats, setLeetcodeStats] = useState(null);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/Harihareshwar_D_P')
      .then(response => response.json())
      .then(data => setLeetcodeStats(data))
      .catch(error => console.error('Error fetching LeetCode stats:', error));
  }, []);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedAchievement(null);
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
      rotate: [0, -2, 2, 0],
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="min-h-screen p-12 mb-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-500 mb-8" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Achievements</h2>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {achievementsData.map((achievement, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center h-[500px]"> {/* Added height and items-center */}
              <motion.img
                src={achievement.image}
                alt={achievement.name}
                className="object-cover w-full md:w-1/2 h-96 cursor-pointer rounded-lg"
                onClick={() => openModal(achievement)}
                whileHover={{ scale: 1.05 }}
              />
              <div className="md:ml-8 mt-4 md:mt-0 w-full md:w-1/2 flex flex-col justify-center items-center"> {/* Added flex and centering */}
                <motion.h3
                  className="text-2xl font-bold text-green-500 mb-4 text-center px-4" // Added padding
                  whileHover={{ scale: 1.05 }}
                  style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
                >
                  {achievement.name}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-4 text-xl text-center" // Added text size and margin
                  whileHover={{ scale: 1.05 }}
                  style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
                >
                  {achievement.year}
                </motion.p>
                <motion.p
                  className="text-gray-300 text-xl text-center" // Added text size
                  whileHover={{ scale: 1.05 }}
                  style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
                >
                  {achievement.conductedAt}
                </motion.p>
              </div>
            </div>
          ))}
        </Carousel>

        <h2 className="text-3xl font-bold text-green-500 mb-8 mt-12" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>HackerRank Stars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hackerrankStars.map((star, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg flex flex-col items-center
                        border border-gray-700 hover:border-green-500 transition-colors duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {star.icon ? (
                <FontAwesomeIcon icon={star.icon} className="text-4xl text-green-500 mb-4" />
              ) : (
                <img src={star.image} alt={star.name} className="w-16 h-16 mb-4 object-contain" />
              )}
              <h3 className="text-xl font-bold text-green-500 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>{star.name}</h3>
              <div className="flex">
                {[...Array(star.stars)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 text-xl" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {leetcodeStats && (
          <div className="mt-12 flex justify-center">
            <div className="max-w-2xl w-full">
              <h2 className="text-3xl font-bold text-green-500 mb-8 text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>LeetCode Stats</h2>
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg flex flex-col items-center
                          border border-gray-700 hover:border-green-500 transition-colors duration-300 w-full"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <motion.img 
                  src={leetcodeImage} 
                  alt="LeetCode" 
                  className="w-32 h-32 mb-4 object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-white text-lg font-sans w-full text-center">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>LeetCode Profile</h3>
                  <p className="mb-2 text-green-300 text-xl">Username: Harihareshwar D P</p>
                  <p className="mb-2 text-green-300 text-xl">Total Problems Solved: {leetcodeStats.totalSolved}</p>
                  <p className="mb-2 text-green-300 text-xl">Easy: {leetcodeStats.easySolved}</p>
                  <p className="mb-2 text-green-300 text-xl">Medium: {leetcodeStats.mediumSolved}</p>
                  <p className="mb-2 text-green-300 text-xl">Hard: {leetcodeStats.hardSolved}</p>
                  <p className="mb-2 text-green-300 text-xl">Global Ranking: {leetcodeStats.ranking}</p>
                  {leetcodeStats.badges && (
                    <div className="mt-4">
                      <h4 className="text-xl font-bold mb-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Badges</h4>
                      <div className="flex flex-wrap justify-center">
                        {leetcodeStats.badges.map((badge, index) => (
                          <img key={index} src={badge.icon} alt={badge.name} className="w-12 h-12 m-2" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {selectedAchievement && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Achievement Details"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="p-4">
            <img src={selectedAchievement.image} alt={selectedAchievement.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold text-green-500 mb-2">{selectedAchievement.name}</h3>
            <p className="text-gray-300 mb-2">{selectedAchievement.year}</p>
            <p className="text-gray-300">{selectedAchievement.conductedAt}</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Achievements;
