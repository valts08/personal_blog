import AvatarImg from '../../src/assets/images/image-avatar.jpg'
import MoonIcon from '../../src/assets/images/icon-moon.svg'
import SunIcon from '../../src/assets/images/icon-sun.svg'
import IconMenu from '../../src/assets/images/icon-menu.svg'
import IconMenuClose from '../../src/assets/images/icon-menu-close.svg'
import { Link } from "react-router-dom";
import useThemeContext from '../hooks/useThemeContext';
import { useState } from 'react'
import MainNavigation from './MainNavigation'

interface VoidFunction {
    toggleFunc: () => void // look up how to make interfaces reusable
}

const Navbar = ({ toggleFunc }: VoidFunction) => {

    const globalDarkTheme = useThemeContext()
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const smallScreen = window.innerWidth < 500

    const handleDropdownToggle = () => {
        setDropdownIsOpen(prevState => !prevState)
    }

    return (
        <div className={`${globalDarkTheme ? "text-neutral-400 bg-neutral-800 border-neutral-700" : "text-neutral-700 bg-white border-neutral-200"}  px-2 flex justify-between border rounded-lg min-h-[55px] items-center`}>
            <Link to="/personal_blog" className="w-[40px] h-[40px]"> {/* REDIRECT TO USER PROFILE */}
                <img className="mx-auto rounded-lg" src={AvatarImg} alt="profile-image" />
            </Link>
            <div className="flex gap-x-4 items-center">
                {!smallScreen && <MainNavigation />}
                <section className={`${smallScreen ? "" : "hidden"}`}>
                    {dropdownIsOpen ? (
                        <button
                            className={`${globalDarkTheme ? "bg-white" : "bg-neutral-800"} w-[40px] h-[40px] rounded-lg py-[5px]`}
                            onClick={() => handleDropdownToggle()}>
                            <img className={`${globalDarkTheme ? 'invert' : ''} mx-auto`}  src={IconMenuClose} 
                            alt="close-dropdown" />
                        </button>
                    ) : (
                        <button
                            className={`${globalDarkTheme ? "bg-neutral-800" : "bg-white"} w-[40px] h-[40px] rounded-lg py-[5px]`}
                            onClick={() => handleDropdownToggle()}>
                            <img className={`${globalDarkTheme ? 'brightness-0 invert' : ''} mx-auto`}  src={IconMenu} 
                            alt="open-dropdown" />
                        </button>
                    )}
                </section>
                <button
                    className={`${globalDarkTheme ? "bg-neutral-900 border-neutral-700" : "border-neutral-200 bg-neutral-100"} w-[40px] h-[40px] border-1 rounded-lg py-[5px]`}
                    onClick={() => toggleFunc()}>
                    <img className='mx-auto'  src={globalDarkTheme ? SunIcon : MoonIcon} 
                    alt={globalDarkTheme ? "moon-image" : "sun-image"} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;