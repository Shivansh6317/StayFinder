import "./Navbar.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (

        <header className="navbar">

            <div className="logo">

                StayFinder

            </div>

            <nav>

                <NavLink to="/">Home</NavLink>

                <NavLink to="/wishlist">

                    Wishlist

                </NavLink>

            </nav>

        </header>

    );

}