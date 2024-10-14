import './App.css';
import { Header } from './components/header';
import { AboutMeSection } from './components/aboutMe';
import { ContactMeSection } from './components/contactMe';
import { EducationSection } from './components/education';
import { HobbySection } from './components/hobbies';
function App() {
  return (
    <div class="area" >
    <Header/>
    <AboutMeSection/>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <HobbySection/>
            <EducationSection/>
            <ContactMeSection/>
    </div>
    
  );
}

export default App;
