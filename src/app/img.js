import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    return (
      <div className="bg-gray-900 py-16 text-white">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 p-6">
                    <img
                        src="/d.jpeg"
                        alt="Shiva"
                        className="rounded-lg object-cover mx-auto"
                    />
                </div>

                <div className="md:w-1/2 p-6">
                    <h1 className="text-5xl font-bold mb-6">
                        Hello, I'm <span className="text-purple-400">Shiva</span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                        A tech enthusiast diving deep into the world of programming, DevOps, and cloud computing. Every day is a new adventure, and I’m here to learn, build, and break things (then fix them, of course).
                    </p>

                    <div className="flex space-x-6 mt-4">
                        <a href="https://github.com/Shiva-Moeini" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
                            <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
                        </a>
                        <a href="shiva.moeini20@gmail.com" className='text-gray-300 hover:text-white'>
                            <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7" />
                        </a>
                        <a href="https://www.linkedin.com/in/shivamoeini/" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
                            <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />
                        </a>
                    </div>
                </div>
             </div>
         </div>
      </div>
    );
}

export default Hero;