import * as React from 'react'
import Confetti from 'js-confetti'

const confetti = new Confetti()

const handleYesClick = () => {
    confetti.addConfetti()
}

function moveNoButton() {
    const noButton = document.querySelector('.no')
    noButton.style.display = 'block'
    noButton.style.position = 'absolute'
    const maxX = window.innerWidth - 10
    const maxY = window.innerHeight - 10

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noButton.style.left = `${randomX}px`
    noButton.style.top = `${randomY}px`
}

export function ForDiana() {
    React.useEffect(() => {
        generateHearts()
        const interval = setInterval(generateHearts, 3000)
        return () => clearInterval(interval)
    }, [])
    const [hearts, setHearts] = React.useState([])

    // Function to generate random hearts
    const generateHearts = () => {
        let heartArray = []
        for (let i = 0; i < 20; i++) {
            // Generates 20 hearts
            const size = Math.random() * 30 + 20
            const positionX = Math.random() * 100
            const positionY = Math.random() * 100
            heartArray.push({ size, positionX, positionY })
        }
        setHearts(heartArray)
    }

    function startAnimation() {
        const bgImage = document.querySelector('.animate-bg')
        bgImage.style.animation = 'moveRight 4s linear forwards'

        setTimeout(() => {
            bgImage.style.animation = 'none'
            alert('I love you, Diana')
        }, 4000)
    }
    function startAnimation2() {
        const bgImage = document.querySelector('.animate-bg2')
        bgImage.style.animation = 'moveLeft 4s linear forwards'
        setTimeout(() => {
            bgImage.style.animation = 'none'
        }, 4000)
    }

    return (
        <div style={{ backgroundColor: 'pink', overflow: 'hidden' }}>
            <div
                style={{ zIndex: 300, height: '391px', width: '220px' }}
                class="animate-bg"
            ></div>
            <div className="containery" style={{ backgroundColor: '#FF69B4' }}>
                {hearts.map((heart, index) => (
                    <div
                        key={index}
                        className="heart"
                        style={{
                            width: heart.size + 'px',
                            height: heart.size + 'px',
                            left: `${heart.positionX}%`,
                            top: `${heart.positionY}%`,
                            animationDuration: `${Math.random() * 5 + 5}s`, // Randomize animation duration
                        }}
                    ></div>
                ))}
                <div className="content">
                    <h1 className="headerText">Will you be my Valentine?</h1>

                    <div className="button-container">
                        <button
                            class="yes"
                            className="buttonVal"
                            onClick={() => {
                                handleYesClick()
                                startAnimation()
                                startAnimation2()
                            }}
                        >
                            Yes
                        </button>
                        <button
                            className="buttonVal no"
                            style={{}}
                            onMouseOver={moveNoButton}
                        >
                            No
                        </button>
                    </div>
                </div>
                <div
                    style={{ zIndex: 300, height: '391px', width: '220px' }}
                    class="animate-bg2"
                ></div>
            </div>
        </div>
    )
}
