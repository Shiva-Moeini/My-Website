import React from 'react';

function MyStory() {
    return (
        <div className="bg-white py-16 text-gray-800 "id='mystory'>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">
              My Story
            </h2>
                <div className="rounded-lg shadow-md p-8">
                    <div className="space-y-8 leading-loose text-xl">
                        <p className="mb-6">
                           At 19, life felt like an endless maze, but my strong English skills became my lifeline. I landed my first job teaching English to kids, despite having no experience. It was overwhelming at first, but I learned to manage classrooms, connect with students, and solve problems.
                        </p>
                        <p className="mb-6">
                            Over seven years, I grew into the role, eventually teaching adults and earning “Top Teacher of the Year” multiple times. Through my students in the tech industry, I discovered a passion for technology.
                        </p>
                        <p className="mb-6">
                            I started learning everything from hardware basics to UI/UX design, coding, and cloud tools. Each step was challenging but exhilarating, and I realized that with effort, you can grow into anything—and even fall in love with it.
                        </p>
                        <p>
                            My journey in tech is just beginning, and I’m excited to keep learning, creating, and exploring where this path will take me.
                        </p>
                  </div>
                </div>
            </div>
        </div>

    );
}

export default MyStory;