import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const AboutUsPage = () => {
  const { scrollY } = useViewportScroll();

  const y1 = useTransform(scrollY, [0, 300], [0, -20]);
  const y2 = useTransform(scrollY, [0, 300], [0, -10]);
  const y3 = useTransform(scrollY, [0, 300], [0, -5]);

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    whileHover: {
      scale: 1.1,
      rotate: 5,
      background: "linear-gradient(135deg, #FF6FD8 0%, #3813C2 100%)",
      boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-10">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl font-bold mb-6"
      >
        Welcome to CinemaVerse
      </motion.h1>
      <div className="max-w-screen-lg mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          transition={{ delay: 0.3, duration: 0.8 }}
          className="p-6 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">About CinemaVerse</h2>
          <p style={{ y: y1 }} className="text-lg text-gray-100">
            At CinemaVerse, we believe in the magic of storytelling through film. Our passion for movies drives us to create a platform where cinephiles can immerse themselves in a world of cinematic wonders. Discover, watch, and share your love for films with us.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          transition={{ delay: 0.6, duration: 0.8 }}
          className="p-6 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p style={{ y: y2 }} className="text-lg text-gray-100">
            Our mission at CinemaVerse is to celebrate the art of filmmaking and provide a space for movie lovers to explore, discover, and engage with their favorite films. We aim to foster a community where creativity and passion for cinema thrive.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          transition={{ delay: 0.9, duration: 0.8 }}
          className="p-6 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
          <p style={{ y: y3 }} className="text-lg text-gray-100">
            - <span className="text-green-200">Extensive Movie Database</span>: Dive into our vast library of films, ranging from golden oldies to contemporary masterpieces.
            <br />- <span className="text-green-200">Personalized Recommendations</span>: Let our advanced recommendation algorithms guide you to your next movie night.
            <br />- <span className="text-green-200">Engaging Community</span>: Join our community of movie buffs, where you can discuss your favorite films, share recommendations, and connect with fellow cinephiles.
            <br />- <span className="text-green-200">Exclusive Content</span>: Gain access to exclusive interviews, behind-the-scenes footage, and insider insights into the world of filmmaking.
            <br />- <span className="text-green-200">Event Screenings</span>: Participate in special event screenings and Q&A sessions with filmmakers and actors.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          transition={{ delay: 1.2, duration: 0.8 }}
          className="p-6 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p style={{ y: y1 }} className="text-lg text-gray-100">
            Behind CinemaVerse is a dedicated team of movie enthusiasts, filmmakers, and tech experts who share a common love for cinema. Our team works tirelessly to bring you the best cinematic experience, combining expertise with a passion for film.
            <br />- <span className="text-green-200">Film Critics</span>: Offering insightful reviews and analyses.
            <br />- <span className="text-green-200">Developers</span>: Creating a seamless and enjoyable user experience.
            <br />- <span className="text-green-200">Community Managers</span>: Ensuring a vibrant and engaged community.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          transition={{ delay: 1.5, duration: 0.8 }}
          className="p-6 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p style={{ y: y2 }} className="text-lg text-gray-100">
            Have a question, suggestion, or just want to say hello? Drop us a message, and our friendly support team will be happy to assist you. Connect with us through our social media channels or visit our support page for more information.
            <br />- <span className="text-green-200">Email</span>: support@cinemaverse.com
            <br />- <span className="text-green-200">Phone</span>: +1 (800) 123-4567
            <br />- <span className="text-green-200">Address</span>: Rr.Mbretresha Teute,Mitrovice
          </p>
        </motion.div>
        
      </div>
    </div>
  );
};

export default AboutUsPage;
