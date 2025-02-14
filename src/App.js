import './App.css'
import { Remainder } from './components/remainder'
import { ForDiana } from './components/forDiana'
import { ValentineDayQuiz } from './components/valentineDayQuiz'
import * as React from 'react'

function App() {
    const [valentineDayClick, setValentineDayClick] = React.useState(false)
    const [valentineDayQuizClick, setValentineDayQuizClick] =
        React.useState(false)

    if (valentineDayClick) {
        return (
            <ForDiana
                setValentineDayQuizClick={setValentineDayQuizClick}
                setValentineDayClick={setValentineDayClick}
            />
        )
    } else if (valentineDayQuizClick) {
        return (
            <ValentineDayQuiz
                setValentineDayQuizClick={setValentineDayQuizClick}
            />
        )
    } else {
        return <Remainder setValentineDayClick={setValentineDayClick} />
    }
}

export default App
