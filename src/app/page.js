import Nav from './Nav'
import './globals.css'
import Hero from './img'
import MyStory from './about-me'
import Achievements from './Achievements'
import Do from './do'
import Education from './education'
import Experiences from './experiences'
import Contact from './footer'




export default function Home() {
  return (
    <>
    <Nav/>
    <Hero/>
    <MyStory/>
    <Achievements/>
    <Do />
    <Education/>
    <Experiences/>
    <Contact/>
        </>
  );
}
