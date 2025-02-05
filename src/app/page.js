import Nav from './components/Nav/Nav';
import './globals.css';
import Me from './components/Me/Me';
import MyStory from './components/MyStory/MyStory';
import Achievements from './components/Achievements/Achievements';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experiences from './components/Experience/Experience';
import Footer from './components/Contact/Contact';

   export default function Home() {

    const navLinks = [
      { href: "#me", label: "Home" },
      { href: "#mystory", label: "My Story" },
      { href: "#achievements", label: "Achievements" },
      { href: "#skills", label: "Skills" },
      { href: "#education", label: "Education" },
      { href: "#experiences", label: "Experiences" },
      { href: "#contact", label: "Contact" }
    ];


    const userData = {  
      name: "Shiva",
      bio: "A passionate full-stack developer with a love for creating innovative web applications.",
      imageSrc: "/d.jpeg",
      githubLink: "https://github.com/Shiva-Moeini",
      emailAddress: "shiva.moeini20@gmail.com",
      linkedinLink: "https://www.linkedin.com/in/shivamoeini/"
    };
    

    const myStoryContent = `At 19, life felt like an endless maze, but my strong English skills became my lifeline. I landed my first job teaching English to kids, despite having no experience. It was overwhelming at first, but I learned to manage classrooms, connect with students, and solve problems.
    \nOver seven years, I grew into the role, eventually teaching adults and earning “Top Teacher of the Year” multiple times. Through my students in the tech industry, I discovered a passion for technology.\nI started learning everything from hardware basics to UI/UX design, coding, and cloud tools. Each step was challenging but exhilarating, and I realized that with effort, you can grow into anything—and even fall in love with it.
    \nMy journey in tech is just beginning, and I’m excited to keep learning, creating, and exploring where this path will take me.`;
  
  
    return (
      <>
       <Nav links={navLinks} />

      <Me
        name={userData.name}
        bio={userData.bio}
        imageSrc={userData.imageSrc}
        githubLink={userData.githubLink}
        emailAddress={userData.emailAddress}
        linkedinLink={userData.linkedinLink}
      />

      <MyStory title="My Story" storyText={myStoryContent} />


      <Achievements/>
      <Skills />
      <Education/>
      <Experiences/>

      
      <Footer
        email={userData.emailAddress}
        githubUrl={userData.githubLink}
        linkedinUrl={userData.linkedinLink}
        connectMessage="Connect with me to discuss exciting opportunities!"
      />
          </>
    );
  } 




