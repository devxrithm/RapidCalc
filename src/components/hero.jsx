import { Link } from 'react-router-dom';
import Accordian from './Accordian';
import Sechero from './SecHero';
import Contact from './Contact'

const Hero = () => {
    return (
        <>
            <header className="hero">
                <div className="left-part">
                    <h1 className="main-head">
                        <span className="rapid">Rapid Calculator |</span><br />
                        Your All-in-One Tool for Quick and Accurate Calculations
                    </h1>

                    <p className="para">Your Ultimate Tool for Quick Calculations! Easily determine ages, calculate time intervals, work with dates and hours, compute BMI and GPA, all in one place. </p>

                    <button className="button-75">
                        <Link to="#tools" >EXPLORE</Link >
                    </button>

                </div>

            </header>
            <Sechero />
            <Accordian />
            <Contact />
        </>
    );
}

export default Hero;
