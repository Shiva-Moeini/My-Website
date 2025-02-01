function Experiences () {
  return (
    <div className="bg-gray-900 min-h-screen py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Experience Card 1: Facebook */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-700 py-8 relative">
              <h3 className="text-center text-lg font-semibold">Facebook</h3>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <img src="/facebook-logo.png" alt="Facebook Logo" className="w-10 h-10 object-contain" />
                </div>
              </div>
            </div>
            <div className="p-6 pt-12">
              <h4 className="text-xl font-semibold mb-2">Software Engineer</h4>
              <p className="text-gray-400 mb-4">June 2018 - Present</p>
              <p className="mb-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              </ul>
            </div>
          </div>

          {/* Experience Card 2: Quora */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-red-700 py-8 relative">
              <h3 className="text-center text-lg font-semibold">Quora</h3>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                  <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center">
                      <img src="/quora-logo.png" alt="Quora Logo" className="w-10 h-10 object-contain" />
                  </div>
              </div>
            </div>
            <div className="p-6 pt-12">
              <h4 className="text-xl font-semibold mb-2">Front-End Developer</h4>
              <p className="text-gray-400 mb-4">May 2017 - May 2018</p>
              <p className="mb-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Experience Card 3: Airbnb */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-red-500 py-8 relative">
              <h3 className="text-center text-lg font-semibold">Airbnb</h3>
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                    <div className="bg-pink-500 rounded-full w-16 h-16 flex items-center justify-center">
                        <img src="/airbnb-logo.png" alt="Airbnb Logo" className="w-10 h-10 object-contain" />
                    </div>
                </div>
            </div>
            <div className="p-6 pt-12">
              <h4 className="text-xl font-semibold mb-2">Software Engineer Intern</h4>
              <p className="text-gray-400 mb-4">Jan 2015 - Sep 2015</p>
              <p className="mb-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experiences;