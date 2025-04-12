import AvatarImg from '../../src/assets/images/image-avatar.jpg'
import MoonIcon from '../../src/assets/images/icon-moon.svg'
import SunIcon from '../../src/assets/images/icon-sun.svg'
import { NavLink, Link } from "react-router-dom";
import useThemeContext from '../hooks/useThemeContext';

interface VoidFunction {
    toggleFunc: () => void // look up how to make interfaces reusable
}

const Navbar = ({ toggleFunc }: VoidFunction) => {

    const globalDarkTheme = useThemeContext() // fix this later, don't leave any type

    const activeLinkStyles = "underline decoration-3 decoration-sky-500/50"
    const hoverLinkStyles = "hover:underline hover:decoration-3 hover:decoration-sky-500/50"

    return (
        <div className={`${globalDarkTheme ? "text-neutral-400 bg-neutral-800 border-neutral-700" : "text-neutral-700 bg-white border-neutral-200"}  px-2 flex justify-between border rounded-lg min-h-[55px] items-center`}>
            <Link to="/personal_blog" className="w-[40px] h-[40px]"> {/* REDIRECT TO USER PROFILE */}
                <img className="mx-auto border-1 rounded-lg" src={AvatarImg} alt="profile-image" />
            </Link>
            <div className="flex gap-x-4 items-center">
                <NavLink to="/personal_blog" className={({ isActive }) => {
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
                    className={`${globalDarkTheme ? "bg-neutral-900 border-neutral-700" : "border-neutral-200 bg-neutral-100"} w-[40px] h-[40px] border-1 rounded-lg  py-[5px]`}
                    onClick={() => toggleFunc()}>
                    <img className='mx-auto'  src={globalDarkTheme ? SunIcon : MoonIcon} 
                    alt={globalDarkTheme ? "moon-image" : "sun-image"} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;