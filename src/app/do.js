import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faDocker, faJs, faNodeJs, faNpm, faHtml5, faCss, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';

function Do() {
    return (
        <div className='bg-white py-20 px-4 md:px-8 lg:px-16'>
            {/* Heading */}
            <h2 className='text-4xl md:text-5xl font-bold text-indigo-600  mb-4'>
                What I Do
            </h2>

            {/* Subheading */}
            <p className='text-lg text-gray-700  mb-12'>
            Passionate full-stack developer with a love for exploring diverse technologies.
            </p>

            {/* Icons Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                {[
                    { icon: faAws, label: "AWS" },
                    { icon: faCloud, label: "Cloud" },
                    { icon: faDatabase, label: "Database" },
                    { icon: faDocker, label: "Docker" },
                    { icon: faJs, label: "JavaScript" },
                    { icon: faNodeJs, label: "Node.js" },
                    { icon: faNpm, label: "NPM" },
                    { icon: faHtml5, label: "HTML5" },
                    { icon: faCss, label: "CSS" },
                    { icon: faLinux, label: "Linux" }
                ].map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <div className='w-16 h-16 flex items-center justify-center'>
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="text-4xl text-gray-700 hover:text-indigo-600 transition-colors"
                            />
                        </div>
                        <p className='text-xs text-gray-600 mt-1'>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Do;
