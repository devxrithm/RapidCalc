import { Link } from "react-router-dom";

const Sechero = () => {
    return (
        <>
            <section id="tools" className="sec-container">
                <h1 className="sec-head">TOOLS</h1>
                <p className="sec-para">Discover the Convenience of Rapid Calculator: Swiftly compute ages, time spans, dates, hours, BMI, and GPA. Experience hassle-free calculations with Rapid Calculator today.</p>
                <div className="container-1">

                    <Link to="/about">
                        <div className="box-x">
                            <img height="100" width="100" className="box-img" src="https://cdn-icons-png.flaticon.com/128/8053/8053014.png" alt="Image 1" />
                            <p>AGE<br /> CALCULATOR</p>
                        </div>
                    </Link>

                    <div className="box-x">
                        <img height="100" width="100" className="box-img" src="https://cdn-icons-png.flaticon.com/128/5192/5192151.png" alt="Image 2" />
                        <p>TIME<br /> CALCULATOR</p>
                    </div>
                    <div className="box-x">
                        <img height="100" width="100" className="box-img" src="https://cdn-icons-png.flaticon.com/128/11484/11484322.png" alt="Image 3" />
                        <p>DATE<br /> CALCULATOR</p>
                    </div>
                    <div className="box-x">
                        <img height="100" width="100" className="box-img" src="https://cdn-icons-png.flaticon.com/128/10440/10440341.png" alt="Image 4" />
                        <p>HOUR<br /> CALCULATOR</p>
                    </div>
                    <div className="box-x">
                        <img height="100" width="100" className="box-img" src="https://cdn-icons-png.flaticon.com/128/3373/3373123.png" alt="Image 5" />
                        <p>BMI<br /> CALCULATOR</p>
                    </div>
                    <div className="box-x">
                        <img height="100" width="100" className="box-img" src="https://cdn-icons-png.flaticon.com/128/2247/2247890.png" alt="Image 6" />
                        <p>GPA<br /> CALCULATOR</p>
                    </div>
                    <div className="box-x">
                        <img height="100" width="100" className="box-img" src="https://cdn-icons-png.flaticon.com/128/2247/2247890.png" alt="Image 6" />
                        <p>GPA<br /> CALCULATOR</p>
                    </div>
                    <div className="box-x">
                        <img height="100" width="100" className="box-img" src="https://cdn-icons-png.flaticon.com/128/2247/2247890.png" alt="Image 6" />
                        <p>GPA<br /> CALCULATOR</p>
                    </div>

                </div>
            </section>


        </>
    );
}

export default Sechero;