import React from 'react';

const Achievements = () => {
  return (
    <div className="bg-slate-900 py-16 text-white " id='achievements'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Achievements and Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Achievement Card 1: AWS Certified Cloud Practitioner */}
          <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-700 py-4 relative">
              <h3 className="text-center text-lg font-semibold">
                AWS Certified Cloud Practitioner
              </h3>
            </div>
            <div className="p-6">
              <img
                src="/image.png"
                alt="AWS Logo"
                className="w-full h-48 object-contain rounded-md mb-4 mx-auto"
              />
              <p className="mb-4 text-gray-300 text-center">
                <a
                  href="https://www.credly.com/badges/f2a0f86d-e63d-4c04-a467-6d3186187252/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>

          {/* Achievement Card 2: Azure Fundamentals */}
          <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-700 py-4 relative">
              <h3 className="text-center text-lg font-semibold">
                Azure Fundamentals
              </h3>
            </div>
            <div className="p-6">
              <img
                src="/mic.svg"
                alt="Azure Logo"
                className="w-full h-48 object-contain rounded-md mb-4 mx-auto"
              />
              <p className="mb-4 text-gray-300 text-center">
                <a
                  href="https://learn.microsoft.com/en-us/users/shivamoeini-4966/credentials/1b283aebe0e01439?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>

          {/* Achievement Card 3: Azure Data Fundamentals */}
          <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-700 py-4 relative">
              <h3 className="text-center text-lg font-semibold">
                Azure Data Fundamentals
              </h3>
            </div>
            <div className="p-6">
              <img
                src="/data.svg"
                alt="Azure Data Logo"
                className="w-full h-48 object-contain rounded-md mb-4 mx-auto"
              />
              <p className="mb-4 text-gray-300 text-center">
                <a
                  href="https://learn.microsoft.com/en-us/users/shivamoeini-4966/credentials/c5682ca1fc5e16e7?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>

          {/* Achievement Card 4: Docker - SWARM  */}
          <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-700 py-4 relative">
              <h3 className="text-center text-lg font-semibold">
                Docker - SWARM
              </h3>
            </div>
            <div className="p-6">
              <img
                src="/docker.webp"
                alt="Docker Logo"
                className="w-full h-48 object-contain rounded-md mb-4 mx-auto"
              />
              <p className="mb-4 text-gray-300 text-center">
                <a
                  href="https://learn.kodekloud.com/certificate/2DECE345F8AE-2DECD7E363DA-2DECD7B59DE0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>

          {/* Achievement Card 5: Kubernetes */}
          <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-700 py-4 relative">
              <h3 className="text-center text-lg font-semibold">
                Kubernetes
              </h3>
            </div>
            <div className="p-6">
              <img
                src="/kuber.webp"
                alt="Kubernetes Logo"
                className="w-full h-48 object-contain rounded-md mb-4 mx-auto"
              />
              <p className="mb-4 text-gray-300 text-center">
                <a
                  href="https://learn.kodekloud.com/user/certificate/2DECE345F8AE-2DECDD4F5331-2DECD7B59DE0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>

          {/* Achievement Card 6: Google UX Design */}
          <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-700 py-4 relative">
              <h3 className="text-center text-lg font-semibold">
                Google UX Design
              </h3>
            </div>
            <div className="p-6">
              <img
                src="/google.png"
                alt="Google Logo"
                className="w-full h-48 object-contain rounded-md mb-4 mx-auto"
              />
              <p className="mb-4 text-gray-300 text-center">
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/29MUTJDQ7TZE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;