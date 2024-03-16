import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center px-4 md:px-0">
            <h1 className="text-3xl font-bold primary-color">Aditya Nisal</h1>
            <ul className="hidden md:flex items-center">
                <li className="p-5"><a href="#about">About</a></li>
                <li className="p-5"><a href="#experience">Experience</a></li>
                <li className="p-5"><a href="#work">Work</a></li>
                <li className="p-5"><a href="#contact">Contact</a></li>
                <li className="p-5"><a href="#certifications">Certifications</a></li>
                <li className="p-5 flex items-center"><a href="https://github.com/Adya97" target="_blank" rel="noopener noreferrer"><FaGithub size={20} className="text-white" /></a></li>
                <li className="p-5 flex items-center"><a href="https://www.linkedin.com/in/aditya-nisal/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} className="text-white" /></a></li>
                <li className="p-5 flex items-center"><a href="mailto:avnisal@gmail.com"><AiOutlineMail size={20} className="text-white" /></a></li>
            </ul>
            <div onClick={handleNav} className="md:hidden z-20">
                {nav ? <AiOutlineClose size={20} className="text-white" /> : <AiOutlineMenu size={20} className="text-white" />}
            </div>
            <div className={`${nav ? 'fixed left-0 top-0 w-[60%] bg-[#202121] h-full ease-in-out duration-500 z-10' : 'fixed left-[-100%] ease-in-out duration-500'} overflow-y-auto`}>
                <h1 className="text-3xl primary-color m-4">Aditya Nisal</h1>
                <ul className="p-8 text-2xl">
                    <li className="p-2"><a href="#home">Home</a></li>
                    <li className="p-2"><a href="#about">About</a></li>
                    <li className="p-2"><a href="#work">Work</a></li>
                    <li className="p-2"><a href="#experience">Experience</a></li>
                    <li className="p-2"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
