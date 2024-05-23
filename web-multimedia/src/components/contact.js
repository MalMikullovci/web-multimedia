import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import 'animate.css';
import 'tailwindcss/tailwind.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const controlsName = useAnimation();
  const controlsEmail = useAnimation();
  const controlsMessage = useAnimation();

  const handleFocus = (controls) => {
    controls.start({
      scale: 1.05,
      transition: { duration: 0.3 }
    });
  };

  const handleBlur = (controls) => {
    controls.start({
      scale: 1,
      transition: { duration: 0.3 }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      alert('Form submitted!');
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-lg p-8 space-y-6 animate__animated animate__fadeIn"
      >
        <h1 className="text-2xl font-bold text-white mb-4">Contact Us</h1>

        <motion.div
          className="relative"
          animate={controlsName}
        >
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => handleFocus(controlsName)}
            onBlur={() => handleBlur(controlsName)}
            className="w-full px-3 py-4 mt-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Name"
            required
          />
          <label
            htmlFor="name"
            className={`absolute left-3 top-3 text-gray-500 transform transition-all duration-300 ease-in-out pointer-events-none ${
              name ? 'text-xs -translate-y-8' : 'translate-y-1/2'
            }`}
          >
            Name
          </label>
        </motion.div>

        <motion.div
          className="relative"
          animate={controlsEmail}
        >
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => handleFocus(controlsEmail)}
            onBlur={() => handleBlur(controlsEmail)}
            className="w-full px-3 py-4 mt-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Email"
            required
          />
          <label
            htmlFor="email"
            className={`absolute left-3 top-3 text-gray-500 transform transition-all duration-300 ease-in-out pointer-events-none ${
              email ? 'text-xs -translate-y-8' : 'translate-y-1/2'
            }`}
          >
            Email
          </label>
        </motion.div>

        <motion.div
          className="relative"
          animate={controlsMessage}
        >
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => handleFocus(controlsMessage)}
            onBlur={() => handleBlur(controlsMessage)}
            className="w-full px-3 py-4 mt-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Message"
            required
          />
          <label
            htmlFor="message"
            className={`absolute left-3 top-3 text-gray-500 transform transition-all duration-300 ease-in-out pointer-events-none ${
              message ? 'text-xs -translate-y-8' : 'translate-y-1/2'
            }`}
          >
            Message
          </label>
        </motion.div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
