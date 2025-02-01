function Education() {
    return (
        <div className='bg-white py-12 px-4 md:px-8 lg:px-16'>
            {/* Heading */}
            <h2 className='text-4xl md:text-5xl font-bold text-indigo-600 mb-8'>
                Education
            </h2>

            {/* University */}
            <div className='mb-12'>
                <div className='flex items-center mb-4'>
                    {/* University Logo */}
                    <img
                        src="../../uni.png" // Replace with your University logo path
                        alt="Payame Noor University Logo"
                        className='w-12 h-12 mr-4'
                    />
                    <h3 className='text-2xl font-bold text-gray-800'>
                        Payame Noor University
                    </h3>
                    
                </div>
                <p className='text-lg text-gray-700 mb-1'>
                    Bachelor of Science in Tourism Management
                </p>
                <p className='text-sm text-gray-600 mb-1'>
                    September 2006 - May 2011
                </p>
                <p className='text-sm text-gray-600 '>
                    Sabzevar, Iran
                </p>

            </div>

            
        </div>
    );
}

export default Education;