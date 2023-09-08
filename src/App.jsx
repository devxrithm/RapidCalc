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


export default function App() {
    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Hero />
                    </Route>
                    <Route exact path="/about">
                        <AgeCal />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    )
}
