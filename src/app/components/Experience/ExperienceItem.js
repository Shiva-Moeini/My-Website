const ExperienceItem = ({ title, jobTitle, startDate, endDate, location, descriptionItems, backgroundColor }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className={`py-8 relative ${backgroundColor}`}> {/* Use the background color prop */}
        <h3 className="text-center text-3xl font-semibold">{title}</h3>
      </div>
      <div className="p-6 pt-12">
        <h4 className="text-xl font-semibold mb-1">{jobTitle}</h4>
        <p className="text-gray-400 mb-1">{startDate} - {endDate}</p>
        <p className="mb-4 text-gray-300">{location}</p>
        <ul className="list-disc list-inside text-gray-300">
          {descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;