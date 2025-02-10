import { Header } from './header'
import { AboutMeSection } from './aboutMe'
import { ContactMeSection } from './contactMe'
import { EducationSection } from './education'
import { HobbySection } from './hobbies'

export function Remainder() {
    return (
        <div class="area">
            <Header />
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
