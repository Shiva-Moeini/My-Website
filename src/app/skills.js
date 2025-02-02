import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faDocker, faJs, faNodeJs, faHtml5, faCss, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <div className="bg-slate-900 py-16 text-white mt-12" id='skills'>
            <div className="container mx-auto px-4">
          
             <h2 className="text-4xl font-bold mb-6 text-center">
                Skills
                </h2>
                 
                <p className="text-lg mb-12 text-gray-400 text-center">
                  I work across the full stack, with a passion for creating robust and scalable applications.
                </p>

                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {[
                      { icon: faAws, label: "AWS" },
                      { icon: faCloud, label: "Cloud" },
                      { icon: faDatabase, label: "Database" },
                      { icon: faDocker, label: "Docker" },
                      { icon: faJs, label: "JavaScript" },
                      { icon: faNodeJs, label: "Node.js" },
                      { icon: faHtml5, label: "HTML5" },
                      { icon: faCss, label: "CSS" },
                      { icon: faLinux, label: "Linux" }

                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center">
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className="text-5xl text-gray-400 hover:text-white transition-colors"
                                />
                            </div>
                             <p className="text-sm text-gray-400 mt-2">{item.label}</p>
                         </div>
                      ))}
                 </div>
             </div>
        </div>
    );
}

export default Skills;