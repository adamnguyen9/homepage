export function Header(props) {
    return (
        <div id="navbar">
            <a href="#about">About Me</a>
            <a href="#hobbies">Hobbies</a>
            <a href="#education">Education and Skills</a>
            <a href="#contact">Contact Me!</a>
            <a onClick={() => props.setValentineDayClick(true)}>
                Secret for Diana
            </a>
        </div>
    )
}
