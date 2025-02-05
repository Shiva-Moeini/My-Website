import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer({
  email = "default@example.com",
  githubUrl = "#",
  linkedinUrl = "#",
  connectMessage = "I'm excited to connect with other professionals and explore new opportunities. Feel free to reach out!"
}) {
  return (
    <div className="bg-white py-16 text-gray-800" id='contact'>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">
          Let's Connect
        </h2>
        <div className="p-6">
          <p className="text-lg mb-4">
            {connectMessage}
          </p>
          <div className="text-xl flex justify-center space-x-8">
            <a href={`mailto:${email}`} className="flex items-center text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-5 h-5" />
              Email
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faGithub} className="mr-2 w-5 h-5" />
              Github
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;