function Achievements(){
    return(
        <div className="bg-gray-900 px-4 md:px-6 py-16 lg:px-8 m-10 rounded-3xl">
            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 ">
                Achievements and Certifications
            </h2>

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {/* Box 1 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                    <img
                        src="../../image.png"
                        alt="Google Code-in Certificate"
                        className="w-full h-48 object-contain rounded-md mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">AWS Certified Cloud Practitioner </h3>
                    <a
                        href="https://www.credly.com/badges/f2a0f86d-e63d-4c04-a467-6d3186187252/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Certificate
                    </a>
                </div>

                {/* Box 2 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                    <img
                        src="../../mic.svg"
                        alt="Google Assistant Action Certificate"
                        className="w-full h-48 object-contain rounded-md mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Azure Fundamentals</h3>
                    <a
                        href="https://learn.microsoft.com/en-us/users/shivamoeini-4966/credentials/1b283aebe0e01439?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Certificate
                    </a>
                </div>

                {/* Box 3 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                    <img
                        src="../../data.svg"
                        alt="PWA Web App Developer Certificate"
                        className="w-full h-48 object-contain rounded-md mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Azure Data Fundamentals</h3>
                    <a
                        href="https://learn.microsoft.com/en-us/users/shivamoeini-4966/credentials/c5682ca1fc5e16e7?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Certificate
                    </a>
                </div>

                {/* Box 4 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                    <img
                        src="../../docker.webp"
                        alt="First Pakistani Google Code-in Finalist Certificate"
                        className="w-full h-48 object-contain rounded-md mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Docker - SWARM </h3>
                    <a
                        href="https://learn.kodekloud.com/certificate/2DECE345F8AE-2DECD7E363DA-2DECD7B59DE0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Certificate
                    </a>
                </div>

                {/* Box 5 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                    <img
                        src="../../kuber.webp"
                        alt="JavaScript Guru Certificate"
                        className="w-full h-48 object-contain rounded-md mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Kubernetes </h3>
                    <a
                        href="https://learn.kodekloud.com/user/certificate/2DECE345F8AE-2DECDD4F5331-2DECD7B59DE0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Certificate
                    </a>
                </div>

                {/* Box 6 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                    <img
                        src="../../google.png"
                        alt="SMIT PWA Certification"
                        className="w-full h-48 object-contain rounded-md mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Google UX Design</h3>
                    <a
                        href="https://www.coursera.org/account/accomplishments/specialization/29MUTJDQ7TZE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Certificate
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Achievements;