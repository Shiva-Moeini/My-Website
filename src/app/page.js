import Nav from './nav'
import './globals.css'
import Hero from './me'
import MyStory from './myStory'
import Achievements from './achievements'
import Skills from './skills'
import Education from './education'
import Experiences from './experiences'
import Footer from './contact'




export default function Home() {
  return (
    <>
    <Nav/>
    <Hero/>
    <MyStory/>
    <Achievements/>
    <Skills />
    <Education/>
    <Experiences/>
    <Footer/>
        </>
  );
}
