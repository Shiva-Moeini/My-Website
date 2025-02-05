const EducationItem = ({ university, degree, startDate, endDate, location, logoSrc, logoAlt }) => {
  return (
    <div className="rounded-lg shadow-md p-8">
      <div className="flex items-center mb-4">
        <img
          src={logoSrc}
          alt={logoAlt}
          className="w-12 h-12 mr-4"
        />
        <h3 className="text-2xl font-bold text-gray-800">
          {university}
        </h3>
      </div>
      <p className="text-lg mb-1">
        {degree}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        {startDate} - {endDate}
      </p>
      <p className="text-sm text-gray-600">
        {location}
      </p>
    </div>
  );
};

export default EducationItem;