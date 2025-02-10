import React from 'react'
import doit from '../Assests/ecommerce.png'
import spotify from '../Assests/spotify.jpg'
import facerec from '../Assests/face-recognition.jpg'
import instaclone from '../Assests/Instagram.jpg'
import awsserver from '../Assests/AWS-serverless.png'
import covid19 from '../Assests/covid.jpg'

const Work = () => {
  return (
    <div className=' max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl font-bold mb-4 primary-color'>Work</p>
            <p className='text-white text-base lg:text-lg'>
                Here is my recent work:
                </p>
        </div>
      
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        <div className='transform trasition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={doit} layout="fill" objectFit="cover" alt=""/>
            <div className='opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-normal items-center'>
                <span className='text-2x1 font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                    <a href='https://github.com/Adya97/ultimate-ecommerce-project-devops'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>
                            Ecommerce E2E Devops
                        </button>
                    </a>
                </div>
            </div>
        </div>


        <div className='transform trasition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={spotify} layout="fill" objectFit="cover" alt=""/>
            <div className='opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-normal items-center'>
                <span className='text-2x1 font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                    <a href='https://github.com/Adya97/Spotify_Music_Store_Analysis'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>
                            Spotify SQL Project
                        </button>
                    </a>
                </div>
            </div>
        </div>


        <div className='transform trasition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={facerec} layout="fill" objectFit="cover" alt=""/>
            <div className='opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-normal items-center'>
                <span className='text-2x1 font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                    <a href='https://github.com/Adya97/face-recognition-webapp'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>
                            Face Recognication using AWS
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform trasition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={instaclone} layout="fill" objectFit="cover" alt=""/>
            <div className='opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-normal items-center'>
                <span className='text-2x1 font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                    <a href='https://github.com/Adya97/Instagram-Clone-SQL'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>
                            Instagram Clone SQL
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform trasition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={awsserver} layout="fill" objectFit="cover" alt=""/>
            <div className='opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-normal items-center'>
                <span className='text-2x1 font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                    <a href='https://github.com/Adya97/-AWS-Serverless-Web-Application'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>
                            AWS Serverless Application
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform trasition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={covid19} layout="fill" objectFit="cover" alt=""/>
            <div className='opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-normal items-center'>
                <span className='text-2x1 font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                    <a href='https://github.com/Adya97/Covid-19-Data-Analysis'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>
                            Covid 19 Data Analysis Using Python
                        </button>
                    </a>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Work
