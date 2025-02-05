
import ExperienceItem from './ExperienceItem'; // Import the ExperienceItem component

function Experiences() {
  const experiencesData = [
    {
      title: "Primark",
      jobTitle: "Retail Assistant",
      startDate: "2024",
      endDate: "present",
      location: "The Netherlands",
      descriptionItems: [
        "Collaborated with team members to achieve sales targets and improve store operations.",
        "Improved Dutch language proficiency through daily interactions with customers and colleagues.",
        "Maintained a clean and organized workspace."
      ],
      backgroundColor: "bg-blue-700"
    },
    {
      title: "LotusNet",
      jobTitle: "Linux System Administrator",
      startDate: "2021",
      endDate: "2022",
      location: "Tehran, Iran",
      descriptionItems: [
        "Streamlined user administration by creating, managing, and securing user accounts according to security best practices.",
        "Enhanced operational efficiency by leveraging Ansible to automate repetitive tasks, reducing manual workload and improving consistency.",
        "Assisting with software installations and updates."
      ],
      backgroundColor: "bg-red-700"
    },
    {
      title: "LotusNet",
      jobTitle: "IT Help Desk",
      startDate: "2020",
      endDate: "2021",
      location: "Tehran, Iran",
      descriptionItems: [
        "Installed and configured computer hardware and software for a team of 30 employees.",
        "Handled tickets from our dealers and end users.",
        "Kept colleagues informed about the progress of reported issues and providing timely solutions.",
        "Analyzed and solved more complex IT problems for second-line support."
      ],
      backgroundColor: "bg-blue-700"
    },
    {
      title: "Self-Employed",
      jobTitle: "English Teacher",
      startDate: "2006",
      endDate: "2022",
      location: "Iran",
      descriptionItems: [
        "Developed and implemented lesson plans tailored to diverse learning styles.",
        "Collaborated with colleagues to design cross-curricular projects.",
        "Trained and supported students and peers in using digital tools and platforms.",
        "Innovated teaching with voice recordings for grammar and vocabulary, accommodating busy professionals during daily activities."
      ],
      backgroundColor: "bg-red-700"
    },
    {
      title: "Volunteer Work",
      jobTitle: "English Translator",
      startDate: "2008",
      endDate: "2009",
      location: "Sabzevar, Iran",
      descriptionItems: [
        "Served as a Translator in Cultural Heritage, Handcrafts, and Tourism Organization in Sabzevar. Collaborated with archaeologists, providing language support for their work in exploring ancient places and conducting research."
      ],
      backgroundColor: "bg-blue-700"
    }
  ];

  return (
    <div className="bg-slate-900 min-h-screen py-16 text-white" id="experiences">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map over the experiencesData array and render an ExperienceItem for each item */}
          {experiencesData.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              jobTitle={experience.jobTitle}
              startDate={experience.startDate}
              endDate={experience.endDate}
              location={experience.location}
              descriptionItems={experience.descriptionItems}
              backgroundColor={experience.backgroundColor} // Pass the background color
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;