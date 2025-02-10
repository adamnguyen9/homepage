import { Header } from './header'
import { AboutMeSection } from './aboutMe'
import { ContactMeSection } from './contactMe'
import { EducationSection } from './education'
import { HobbySection } from './hobbies'

export function Remainder(props) {
    return (
        <div class="area">
            <Header setValentineDayClick={props.setValentineDayClick} />
            <AboutMeSection />
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
            <HobbySection />
            <EducationSection />
            <ContactMeSection />
        </div>
    )
}
