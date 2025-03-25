import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [lightTheme, setLightTheme] = useState(true);

    const activeLinkStyles = "underline decoration-3 decoration-sky-500/50"
    const hoverLinkStyles = "hover:underline hover:decoration-3 hover:decoration-sky-500/50"

    return (
        <div className="text-neutral-700 bg-white px-2 flex justify-between border rounded-lg min-h-[55px] items-center border-neutral-200">
            <Link to="/" className="w-[40px] h-[40px]"> {/* REDIRECT TO USER PROFILE */}
                <img className="mx-auto border-1 rounded-xl border-neutral-200" src="../images/image-avatar.jpg" alt="profile-image" />
            </Link>
            <div className="flex gap-x-4 items-center">
                <NavLink to="/" className={({ isActive }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> Home</NavLink>
                <NavLink to="/blog" className={({ isActive }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> Blog</NavLink>
                <NavLink to="/about" className={({ isActive }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> About</NavLink>
                <NavLink to="/newsletter" className={({ isActive }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> Newsletter</NavLink>
                <button
                    className="w-[40px] h-[40px] border-1 rounded-lg border-neutral-200 bg-neutral-100 py-[5px]"
                    onClick={() => setLightTheme(!lightTheme)}>
                    <img className="mx-auto" src={lightTheme ? "../images/icon-moon.svg" : "../images/icon-sun.svg"} 
                    alt={lightTheme ? "moon-image" : "sun-image"} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;