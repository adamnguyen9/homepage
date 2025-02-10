import './App.css'
import { Remainder } from './components/remainder'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ForDiana } from './components/forDiana'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Remainder />} />
                <Route path="/valentine" element={<ForDiana />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
