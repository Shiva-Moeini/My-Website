import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Me({
    name = "Default Name",  
    bio = "Default Bio",
    imageSrc = "/d.jpeg",
    githubLink = "#",
    emailAddress = "default@example.com",
    linkedinLink = "#"
  }) {
    return (
      <div className="bg-gray-900 py-16 text-white " id='me'>
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 p-6">
                    <img
                        src={imageSrc}
                        alt="Shiva"
                        className="rounded-lg object-cover mx-auto"
                    />
                </div>

                <div className="md:w-1/2 p-6">
                    <h1 className="text-5xl font-bold mb-6">
                        Hello, I'm <span className="text-purple-400">{name}</span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                        {bio}
                    </p>

                    <div className="flex space-x-6 mt-4">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
                            <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
                        </a>
                        <a href={emailAddress} className='text-gray-300 hover:text-white'>
                            <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7" />
                        </a>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
                            <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />
                        </a>
                    </div>
                </div>
             </div>
         </div>
      </div>
    );
}

export default Me;