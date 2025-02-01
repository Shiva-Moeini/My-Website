// src/components/Hero.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Hero() {
    return (
        
        <div className=' rounded-3xl flex flex-col md:flex-row items-center m-12 p-10 border-8 border-lime-900 '>
            
            <div className='w-full md:w-2/3'>
              <img className='rounded-3xl  '  src="../../d.jpeg" alt="shiva" />
            </div>
          

            <div className='w-full md:w-3/3 p-6 ml-4'>
                <h1 className='font-bold text-5xl pb-6 '>Hello,<> </>I'm <span className='text-indigo-600'> Shiva </span></h1>
                <p className='font-normal text-2xl text-gray-700 leading-10'>A tech enthusiast diving deep into the world of programming, 
                    DevOps, and cloud computing. Every day is a new adventure, 
                    and I’m here to learn, build, and break things (then fix them, of course).</p>

                    <div className='flex space-x-4 mt-6'>
                    
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="w-8 h-8  hover:text-indigo-600 transition-colors"
                        />
                    </a>

                   
                    <a href="mailto:youremail@gmail.com">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="w-8 h-8  hover:text-red-600 transition-colors"
                        />
                    </a>

                    {/* LinkedIn Icon */}
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="w-8 h-8  hover:text-sky-900 transition-colors"
                        />
                    </a>
                </div>
                    
            </div>
        </div>
        
    );

    }
export default Hero;
