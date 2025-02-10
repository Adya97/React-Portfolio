import React from 'react'
import aboutimg from '../Assests/devops.png'
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        
      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>
                Results-driven and detail-oriented software engineering professional with experience in DevOps, specialising in CI/CD pipelines, cloud platforms (AWS) and infrastructure automation using tools like Terraform, Docker, and Kubernetes. Proven ability to streamline software delivery processes and optimise system reliability. Passionate about leveraging cutting-edge technologies to drive innovation in cloud and DevOps solutions. 
                </p>
            </div>
        </div>

        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutimg} alt="phone of aditya" width={300} height={300}/>
      </div>
    </div>
  )
}

export default About
