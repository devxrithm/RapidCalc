import './App.css'
import AgeCal from './components/Age/Agecal'
import Nav from './components/Nav'
import Hero from './components/hero'
import Footer from './components/Footer';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import BMICalculator from './components/BMI/Bmi';
import Timeduration from './components/Timeduration/time';


export default function App() {
    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Hero />
                    </Route>
                    <Route exact path="/age-calculation">
                        <AgeCal />
                    </Route>
                    <Route exact path="/bmi-calculator">
                        <BMICalculator />
                    </Route>
                    <Route exact path="/time-duration-calculator">
                        <Timeduration/>
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    )
}
