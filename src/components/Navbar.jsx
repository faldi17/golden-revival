import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Keemasan Islam</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to="/" end className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink></li>
                    <li><NavLink to="/tech-religion" className={({ isActive }) => isActive ? "text-primary" : ""}>Teknologi & Agama</NavLink></li>
                    <li><NavLink to="/golden-age" className={({ isActive }) => isActive ? "text-primary" : ""}>Zaman Keemasan</NavLink></li>
                    <li><NavLink to="/generation" className={({ isActive }) => isActive ? "text-primary" : ""}>Generasi</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
