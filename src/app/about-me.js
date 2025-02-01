

function MyStory() {
    return (
        <div className='bg-gray-900 py-12 px-4 md:px-6 lg:px-8 m-10 p-10 rounded-3xl'>
            {/* Section Heading */}
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                My Story
            </h2>

            <div className='space-y-8 text-white'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
                    <div className='flex-1 leading-loose text-2xl'>
                        <p className='mb-6'>
                            At 19, life felt like an endless maze, but my strong English skills became my lifeline. I landed my first job teaching English to kids, despite having no experience. It was overwhelming at first, but I learned to manage classrooms, connect with students, and solve problems.
                        </p>
                        <p className='mb-6'>
                            Over seven years, I grew into the role, eventually teaching adults and earning “Top Teacher of the Year” multiple times. Through my students in the tech industry, I discovered a passion for technology.
                        </p>
                        <p className='mb-6'>
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