import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1200px] sm:h-[150px] py-4 flex justify-between items-center mx-auto text-white'>
        <div>
          <span className='primary-color text-lg text-white'>Aditya Nisal</span>
        </div>
        <div className='flex items-center'>
          <a href="mailto:avnisal@gmail.com" className="text-white mr-4"><AiOutlineMail size={24} /></a>
          <a href="https://github.com/yourUsername" target="_blank" rel="noopener noreferrer" className="text-white mr-4"><FaGithub size={24} /></a>
          <a href="https://linkedin.com/in/yourProfile" target="_blank" rel="noopener noreferrer" className="text-white"><FaLinkedinIn size={24} /></a>
        </div>
    </div>
  )
}

export default Footer;
