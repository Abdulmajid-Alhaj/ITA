import React , { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function OurProject() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <header className="bg-gray-800 p-4 flex justify-between items-center">
                <div className="text-white text-2xl font-bold">Logo</div>
                <nav className="hidden md:flex flex-grow items-center justify-center">
                <ul className="flex space-x-6 text-white">
                    <li className="cursor-pointer">HOME</li>
                    <li className="cursor-pointer">ABOUT</li>
                    <li className="cursor-pointer">TEAM</li>
                    <li className="cursor-pointer">PROJECTS</li>
                    <li className="cursor-pointer">CONTACT</li>
                </ul>
                </nav>
                <div className="hidden md:flex space-x-4 md:order-3">
                    <button className="bg-white text-black px-4 py-2 rounded">Login</button>
                    <button className="bg-black text-white px-4 py-2 rounded">Register</button>
                </div>
                <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                </div>
            </header>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white flex items-center flex-col">
                <ul className="flex flex-col items-center space-y-4 py-4">
                    <li className="cursor-pointer">HOME</li>
                    <li className="cursor-pointer">ABOUT</li>
                    <li className="cursor-pointer">TEAM</li>
                    <li className="cursor-pointer">PROJECTS</li>
                    <li className="cursor-pointer">CONTACT</li>
                </ul>
                <div className="flex space-x-4 md:order-3">
                    <button className="bg-white text-black px-4 py-2 rounded">Login</button>
                    <button className="bg-black text-white px-4 py-2 rounded">Register</button>
                </div>
                </div>
            )}
            <section className="text-white py-20">
                <div className="container mx-auto">
                    <h1 className="text-4xl mb-10">OUR PROJECT</h1>
                </div>
                <div className='flex justify-center'>
                    <Carousel showThumbs={false} autoPlay infiniteLoop className='w-3/6'>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpPX-8ao3Ib23I_N8jGhY-Y502APj2PEEWQ&s" alt="Project 1" />
                            </div>
                            <div>
                            <img src="https://via.placeholder.com/600x400" alt="Project 2" />
                            </div>
                            <div>
                            <img src="https://via.placeholder.com/600x400" alt="Project 3" />
                        </div>
                    </Carousel>
                </div>
            </section>
        </div>
    )
}
