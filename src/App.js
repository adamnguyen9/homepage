import './App.css'
import { Remainder } from './components/remainder'
import { ForDiana } from './components/forDiana'
import * as React from 'react'

function App() {
    const [valentineDayClick, setValentineDayClick] = React.useState(false)
    return (
        <div>
            {valentineDayClick ? (
                <ForDiana />
            ) : (
                <Remainder setValentineDayClick={setValentineDayClick} />
            )}
        </div>
    )
}

export default App
