const AchievementCard = ({ title, imageUrl, certificateUrl, imageAlt }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-700 py-4 relative">
        <h3 className="text-center text-lg font-semibold">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-48 object-contain rounded-md mb-4 mx-auto"
        />
        <p className="mb-4 text-gray-300 text-center">
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
          >
            View Certificate
          </a>
        </p>
      </div>
    </div>
  );
};

export default AchievementCard;