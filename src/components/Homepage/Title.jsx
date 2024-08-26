import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';

const Title = ({ title, subtitle, atextColor }) => {
  const textColor = 'text-custom-yellow';
  return (
    <div>

      <motion.h1
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='text-center acme-regular text-xl text-accent'
      >
        {title}
      </motion.h1>
      <motion.p
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='max-w-[600px] mx-auto text-center'
      >
        <span className={`text-center bebas-neue-regular text-6xl pb-9 ${textColor}`}>{subtitle}</span>
      </motion.p>
    </div>
  );
};

export default Title;
