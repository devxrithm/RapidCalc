import './App.css'
// import AgeCal from './components/Age/agecal'
import Nav from './components/Nav'
import Hero from './components/hero'
import Sechero from './components/SecHero'
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
    return (
        <> 
            <Router>
            {/* <h1>ukcode</h1> */}
            {/* <AgeCal /> */}
            <Nav/>
            <Hero/>
            <Sechero/>
            </Router>
        </>
    )
}
