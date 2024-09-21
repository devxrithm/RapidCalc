import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header className="fix">
                <nav className="nav">
                    <Link to="/">
                        <div className="logo">Rapid Calc</div>
                    </Link>
                    <ul className="list">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                        <li> <Link to="#">Blog</Link> </li>
                        <li> <Link to="#contact">Contact</Link> </li>
                        <li> <Link to="#">Support</Link> </li>

                    </ul>
                    <i className='bx bx-menu-alt-right menu-logo' ></i>

                </nav>
                {/* <hr /> */}

            </header>

        </>
    );
}

export default Nav;
