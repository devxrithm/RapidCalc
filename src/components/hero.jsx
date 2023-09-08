import { Link } from 'react-router-dom';
import Accordian from './Accordian';
import Sechero from './SecHero';

const Hero = () => {
    return (
        <>
            <header className="hero">
                <div className="left-part">
                    <h1 className="main-head">
                        <span className="rapid">Rapid Calculator |</span>
                        <br />
                        <span className="inside-rapid">Your All-in-One Tool for Quick and Accurate Calculations</span></h1>
                    <p className="para">Your Ultimate Tool for Quick Calculations! Easily determine ages, calculate time intervals, work with dates and hours, compute BMI and GPA, all in one place. </p>

                    <button className="button-75" role="button">
                        <Link to="#tools" >EXPLORE</Link >
                    </button>

                </div>

                <div className="right-part">

                    <img className="img-1" src="https://img.freepik.com/premium-vector/programmer-focused-work-project-while-sitting-easy-chair_569013-330.jpg?w=740" alt="img" height="100" width="100" />
                </div>

            </header>
            <Sechero />
            <Accordian />
        </>
    );
}

export default Hero;