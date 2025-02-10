import React from 'react';
import aws from '../Assests/aws.png'; // Ensure the folder name is correctly spelled as 'Assets'
import terraform from '../Assests/terraform.png';
import k8 from '../Assests/k8.png';
import git from '../Assests/git.png';
import docker from '../Assests/docker.webp';
function Skills() {
  return (
    <div className=' bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
        <h2 className='text-white text-2xl md:text-4xl font-bold m-4'>
            My <br/> Tech <br/> Stack 
        </h2>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={aws} alt='AWS logo' width={100} height={100}/>
            <p className='mt-2'>AWS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={terraform} alt='Terraform logo' width={100} height={100}/>
            <p className='mt-2'>Terraform</p>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={docker} alt='Docker logo' width={100} height={100}/>
            <p className='mt-2'>Docker</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={k8} alt='Kubernetes logo' width={100} height={100}/>
            <p className='mt-2'>Kubernetes</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={git} alt='Gitops logo' width={100} height={100}/>
            <p className='mt-2'>Gitops</p>
        </div>
    </div>
  );
}

export default Skills;
