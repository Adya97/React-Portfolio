import React from 'react'
import heroimage from '../Assests/Adi.jpg'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
        
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <img src={heroimage} alt="pichero"/>
         </div>
            <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl sm:text-5x1 lg:text-8x1 font-extrabold'>
                    <span className='primary-color'>
                        I'm a
                    </span> <br/>
                    <TypeAnimation
                    sequence={[
                        "DevOps Engineer",
                        1000,
                        "Cloud Engineer",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>

                <p className='text-white sm:text-lg my-6 lg:text-x1'>
                    My name is Aditya Nisal and I am master student of HTW Berlin. Currently working as a Working Student as DevOps Engineer at M. Asam Gmbh. I am passionate about leveraging cutting-edge technologies to drive innovation in cloud and DevOps solutions.
                </p>

                <div className='my-8'>
                    <a href='https://drive.google.com/file/d/1mcBBkOjQmuquzIgArYzABVRpkDLPV7Is/view?usp=sharing' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                        Download CV
                    </a>
                    <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                        Contact Me
                    </a>
                </div>
        </div>
    </div>
  )
}

export default Hero
