import { NavLink } from "react-router-dom"
import useThemeContext from "../hooks/useThemeContext"


const MainNavigation = () => {

    const globalDarkTheme = useThemeContext()
    const activeLinkStyles = `${globalDarkTheme ? "text-white" : ""} underline decoration-3 decoration-sky-500/50`
    const hoverLinkStyles = "hover:underline hover:decoration-3 hover:decoration-sky-500/50"

    return (
        <>
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
        </>
    )
}

export default MainNavigation