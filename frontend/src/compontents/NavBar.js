import React , { useState } from 'react'

export default function NavBar() {
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
    </div>
    )
}
