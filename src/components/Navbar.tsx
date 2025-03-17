import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [lightTheme, setLightTheme] = useState(true);

    const activeLinkStyles = "underline decoration-3 decoration-sky-500/50"
    const hoverLinkStyles = "hover:underline hover:decoration-3 hover:decoration-sky-500/50"

    return (
        <div className="text-neutral-700 bg-white px-2 flex justify-between border-[1.5px] rounded-lg min-h-[55px] items-center border-neutral-100">
            <img className="w-[45px] h-[40px] border-1 rounded-xl border-neutral-200" src="./assets/images/image-avatar.jpg" alt="profile-image" />
            <div className="flex gap-x-4 items-center">
                <NavLink to="/" className={({ isActive, isPending }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> Home</NavLink>
                <NavLink to="/blog" className={({ isActive, isPending }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> Blog</NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> About</NavLink>
                <NavLink to="/newsletter" className={({ isActive, isPending }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> Newsletter</NavLink>
                <button
                    className="border-1 rounded-xl border-neutral-200 bg-neutral-100 min-h-[40px] py-[5px]"
                    onClick={() => setLightTheme(!lightTheme)}>
                    <img className="w-[40px] h-[25px]" src={lightTheme ? "../assets/images/icon-moon.svg" : "../assets/images/icon-sun.svg"} 
                    alt={lightTheme ? "moon-image" : "sun-image"} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;