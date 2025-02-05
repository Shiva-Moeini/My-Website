function MyStory({ title = "My Story", storyText = "" }) {
 
  const paragraphs = storyText ? storyText.split('\n') : [];

  return (
    <div className="bg-white py-16 text-gray-800" id='mystory'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">
          {title}  
        </h2>
        <div className="rounded-lg shadow-md p-8">
          <div className="space-y-8 leading-loose text-xl">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStory;