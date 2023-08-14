
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
                    {/* <button className="btn">Explore</button> */}

                    <button className="button-75" role="button"><span className="text" href="#tools">EXPLORE</span></button>


                </div>

                <div className="right-part">
                    {/* <img className="img-1" src="https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-2170.jpg?w=740&t=st=1691840596~exp=1691841196~hmac=3402bc63d02ef5f469a3371904bcc22ebeebf19b85efd022a85a1b70bb8b85dd" alt="img" /> */}
                    <img className="img-1" src="https://img.freepik.com/premium-vector/programmer-focused-work-project-while-sitting-easy-chair_569013-330.jpg?w=740" alt="img" height="100" width="100" />
                </div>

            </header>
        </>
    );
}

export default Hero;