import React from 'react';
import html from '../Assests/html.png'; // Ensure the folder name is correctly spelled as 'Assets'
import css from '../Assests/css.png';
import javascript from '../Assests/javascript.png';
import react from '../Assests/react.png';
import tailwind from '../Assests/tailwind.png';

function Skills() {
  return (
    <div className=' bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
        <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
            My <br/> Tech <br/> Stack 
        </h2>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt='Tailwind CSS logo' width={100} height={100}/>
            <p className='mt-2'>Tailwind</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt='HTML logo' width={100} height={100}/>
            <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt='CSS logo' width={100} height={100}/>
            <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt='JavaScript logo' width={100} height={100}/>
            <p className='mt-2'>JavaScript</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt='React logo' width={100} height={100}/>
            <p className='mt-2'>React</p>
        </div>
    </div>
  );
}

export default Skills;
