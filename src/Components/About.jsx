import React from 'react'
import aboutimg from '../Assests/about.jpg'
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        
      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>
                A dedicated Software developer with expertise in web development and automation, specializing in creating innovative software solutions. Experienced in optimizing fulfilment processes and software development lifecycle. Passionate about driving efficiency and user experience in e-commerce technologies. Eager to contribute to Informs mission with a focus on impactful, customer-centric software development.
                </p>
            </div>
        </div>

        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutimg} alt="phone of aditya" width={300} height={300}/>
      </div>
    </div>
  )
}

export default About
