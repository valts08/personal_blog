import AvatarImg from '../../src/assets/images/image-avatar.jpg'
import MoonIcon from '../../src/assets/images/icon-moon.svg'
import SunIcon from '../../src/assets/images/icon-sun.svg'
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import { NavLink, Link } from "react-router-dom";

interface VoidFunction {
    toggleFunc: () => void // look up how to make interfaces reusable
}

const Navbar = ({ toggleFunc }: VoidFunction) => {

    const globalDarkTheme = useContext(ThemeContext) // fix this later, don't leave any type

    const activeLinkStyles = "underline decoration-3 decoration-sky-500/50"
    const hoverLinkStyles = "hover:underline hover:decoration-3 hover:decoration-sky-500/50"

    return (
        <div className="text-neutral-700 bg-white px-2 flex justify-between border rounded-lg min-h-[55px] items-center border-neutral-200">
            <Link to="/" className="w-[40px] h-[40px]"> {/* REDIRECT TO USER PROFILE */}
                <img className="mx-auto border-1 rounded-xl border-neutral-200" src={AvatarImg} alt="profile-image" />
            </Link>
            <div className="flex gap-x-4 items-center">
                <NavLink to="personal_blog/" className={({ isActive }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> Home</NavLink>
                <NavLink to="personal_blog/blog" className={({ isActive }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> Blog</NavLink>
                <NavLink to="personal_blog/about" className={({ isActive }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> About</NavLink>
                <NavLink to="personal_blog/newsletter" className={({ isActive }) => {
                    return isActive ? activeLinkStyles : hoverLinkStyles
                }}> Newsletter</NavLink>
                <button
                    className="w-[40px] h-[40px] border-1 rounded-lg border-neutral-200 bg-neutral-100 py-[5px]"
                    onClick={() => toggleFunc()}>
                    <img className="mx-auto" src={globalDarkTheme ? MoonIcon : SunIcon} 
                    alt={globalDarkTheme ? "moon-image" : "sun-image"} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;