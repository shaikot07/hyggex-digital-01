import React from 'react';
import { motion } from 'framer-motion';

const OurTeamCard = () => {
  return (
    <div className=" mt-10 mb-10">
      <div className="relative w-80 h-96 overflow-hidden">
        {/* Card Image */}
        <img 
          src="https://i.ibb.co/qpVbszP/0-x-Fuo-UNWch-LZ8bq-S.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
        
        {/* Black Bubble */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-black"
          initial={{ x: 0 }} // Initial position (black bubble covers card)
          whileHover={{ x: '100%' }} // Move the bubble to the right on hover
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
        >
           
          {/* Content inside bubble with opacity animation */}
          <motion.div
            className="text-white p-8 flex flex-col justify-center h-full"
            initial={{ opacity: 0 }} // Initially hidden
            animate={{ opacity: 1 }} // Become visible
            transition={{ duration: 1.5, ease: "easeInOut" }} // Same duration as the bubble
          >
            <h2 className="text-2xl font-semibold mb-4">Hjörtur Hilmarsson</h2>
            <p className="text-sm">
              Hjörtur has a cat that is really sweet. He also has a wife and two kids. Hjörtur likes basketball and is still a huge Michael Jordan fan.
              Born and raised in Iceland, he decided to move to Sweden the day Eyjafjallajökull erupted.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeamCard;
