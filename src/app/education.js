import React from 'react';

function Education() {
    return (
        <div className="bg-white py-16 text-gray-800">
            <div className="container mx-auto px-4">
                  {/* Heading */}
                  <h2 className="text-4xl font-bold text-center mb-10 ">
                        Education
                  </h2>

                 {/* University */}
                  <div className="rounded-lg shadow-md p-8">
                      <div className="flex items-center mb-4">
                             {/* University Logo */}
                              <img
                                  src="/uni.png"
                                   alt="Payame Noor University Logo"
                                   className="w-12 h-12 mr-4"
                               />
                               <h3 className="text-2xl font-bold text-gray-800">
                                     Payame Noor University
                               </h3>
                     </div>
                      <p className="text-lg  mb-1">
                              Bachelor of Science in Tourism Management
                       </p>
                        <p className="text-sm text-gray-600 mb-1">
                             September 2006 - May 2011
                       </p>
                      <p className="text-sm text-gray-600">
                            Sabzevar, Iran
                       </p>
                   </div>
             </div>
         </div>
    );
}

export default Education;