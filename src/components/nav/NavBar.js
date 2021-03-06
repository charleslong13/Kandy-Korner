import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
                <Link className="navbar__link" to="/employees">Customers</Link>
                <Link className="navbar__link" to="/products">Customers</Link>
            </li>
        </ul>
    )
}
