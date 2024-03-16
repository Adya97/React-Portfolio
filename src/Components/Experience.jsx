import React from 'react';
import plobalIcon from '../Assests/plobalapps.png'; // Replace with the actual path to Plobal's icon
import keywordsIcon from '../Assests/keywords1.png'; // Replace with the actual path to Keywords' icon

const Experience = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='experience'>
      <div className='pb-8'>
          <p className='text-4xl font-bold mb-4 primary-color'>Experience</p>
          <p className='text-gray-200 text-lg'>
              Here's a glimpse of my professional journey:
          </p>
      </div>
      
      <div className='space-y-10'>
        {/* Plobal Tech Private Limited */}
        <div className='bg-gray-800 rounded-lg p-6 border-l-4 border-primary-color shadow-lg flex items-center'>
            <img src={plobalIcon} alt="Plobal Tech Logo" className="h-45 w-45 mr-6" /> {/* Increased size */}
            <div>
                <h3 className='text-xl font-semibold text-white'>PLOBAL TECH PRIVATE LIMITED</h3>
                <p className='text-md text-primary-color text-white'>April 2022 - May 2023</p>
                <h4 className='text-lg text-white font-semibold'>SDET-1</h4>
                <p className='text-md text-gray-300 mt-2'>
                I joined PlobalApps, an emerging startup focused on e-commerce, as an SDET-1, where I worked extensively with new technologies such as REST APIs, CI/CD, Appium, Selenium, Test Automation Framework, Postman API, Jira, GitHub, Bitbucket, Jenkins, Python, JSON, XML, TestNG, Mobile Automation, Maven, IntelliJ IDEA, BrowserStack, MySQL, and Java. During my tenure, I sharpened my logic development and problem-solving skills, leading to successful project deliveries for notable clients including Steve Madden, Kite Baby, MPS, and more.</p>
            </div>
        </div>

        {/* Keywords Studios */}
        <div className='bg-gray-800 rounded-lg p-6 border-l-4 border-primary-color shadow-lg flex items-center'>
            <img src={keywordsIcon} alt="Keywords Studios Logo" className="h-45 w-45 mr-6" /> {/* Increased size */}
            <div>
                <h3 className='text-xl font-semibold text-white'>KEYWORDS STUDIOS</h3>
                <p className='text-md text-primary-color text-white'>July 2021 - April 2022</p>
                <h4 className='text-lg text-white font-semibold'>SOFTWARE TEST ENGINEER</h4>
                <p className='text-md text-gray-300 mt-2'>
                During my role as a Software Test Engineer at Keywords Studios, I have built a strong foundation in software development and testing, while continuously updating my skills to align with emerging technologies. I specialize in test automation, encompassing API testing, UI testing, and web services testing, and have hands-on experience with advanced tools like Selenium, Postman API, Jira, TestNG, and MySQL. My time at Keywords Studios has been instrumental in enhancing my technical expertise and staying abreast of industry trends, enabling me to consistently deliver top-notch software solutions while adapting to new technologies.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
