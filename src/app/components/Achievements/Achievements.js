import AchievementCard from './AchievementCard';

const Achievements = () => {
  
  const achievementsData = [
    {
      title: "AWS Certified Cloud Practitioner",
      imageUrl: "/image.png",
      certificateUrl: "https://www.credly.com/badges/f2a0f86d-e63d-4c04-a467-6d3186187252/public_url",
      imageAlt: "AWS Logo"
    },
    {
      title: "Azure Fundamentals",
      imageUrl: "/mic.svg",
      certificateUrl: "https://learn.microsoft.com/en-us/users/shivamoeini-4966/credentials/1b283aebe0e01439?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      imageAlt: "Azure Logo"
    },
    {
      title: "Azure Data Fundamentals",
      imageUrl: "/data.svg",
      certificateUrl: "https://learn.microsoft.com/en-us/users/shivamoeini-4966/credentials/c5682ca1fc5e16e7?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      imageAlt: "Azure Data Logo"
    },
    {
      title: "Docker - SWARM",
      imageUrl: "/docker.webp",
      certificateUrl: "https://learn.kodekloud.com/certificate/2DECE345F8AE-2DECD7E363DA-2DECD7B59DE0",
      imageAlt: "Docker Logo"
    },
    {
      title: "Kubernetes",
      imageUrl: "/kuber.webp",
      certificateUrl: "https://learn.kodekloud.com/user/certificate/2DECE345F8AE-2DECDD4F5331-2DECD7B59DE0",
      imageAlt: "Kubernetes Logo"
    },
    {
      title: "Google UX Design",
      imageUrl: "/google.png",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/29MUTJDQ7TZE",
      imageAlt: "Google Logo"
    }
  ];

  return (
    <div className="bg-slate-900 py-16 text-white" id='achievements'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map over the achievementsData array and render an AchievementCard for each item */}
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={index} // Unique key for each card (important for React)
              title={achievement.title}
              imageUrl={achievement.imageUrl}
              certificateUrl={achievement.certificateUrl}
              imageAlt={achievement.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;