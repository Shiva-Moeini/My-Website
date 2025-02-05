import EducationItem from './EducationItem'; 

function Education() {
  const educationData = [
    {
      university: "Payame Noor University",
      degree: "Bachelor of Science in Tourism Management",
      startDate: "September 2006",
      endDate: "May 2011",
      location: "Sabzevar, Iran",
      logoSrc: "/uni.png",
      logoAlt: "Payame Noor University Logo"
    }
    // You can add more education entries here
  ];

  return (
    <div className="bg-white py-16 text-gray-800" id='education'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 ">
          Education
        </h2>
        {educationData.map((item, index) => (
          <EducationItem
            key={index}
            university={item.university}
            degree={item.degree}
            startDate={item.startDate}
            endDate={item.endDate}
            location={item.location}
            logoSrc={item.logoSrc}
            logoAlt={item.logoAlt}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;