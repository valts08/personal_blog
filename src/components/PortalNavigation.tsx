import { NavLink } from "react-router-dom"
import useThemeContext from "../hooks/useThemeContext"
import Divider from "./Divider"

interface VoidFunction {
    closeOnClick: () => void
}

const PortalNavigation = ({ closeOnClick }: VoidFunction) => {

    const globalDarkTheme = useThemeContext()
    const activeLinkStyles = `${globalDarkTheme ? "text-white" : "font-semibold"}`
    const hoverLinkStyles = `${globalDarkTheme ? "hover:text-white" : "hover:font-semibold"}`
    const sharedLinkStyles = `py-1`

    return (
        <div className={`flex flex-col absolute mx-auto w-9/10 border-1 rounded-lg px-2 py-1 top-[5.3em] ${globalDarkTheme ? "text-neutral-400 border-neutral-700 bg-neutral-800" : "bg-white border-neutral-200"}`}>
            <NavLink to="/personal_blog" onClick={() => closeOnClick()} className={({ isActive }) => {
                return `${isActive ? activeLinkStyles : hoverLinkStyles} ${sharedLinkStyles}`
            }}> Home</NavLink>
            <Divider />
            <NavLink to="/blog" onClick={() => closeOnClick()} className={({ isActive }) => {
                return `${isActive ? activeLinkStyles : hoverLinkStyles} ${sharedLinkStyles}`
            }}> Blog</NavLink>
            <Divider />
            <NavLink to="/about" onClick={() => closeOnClick()} className={({ isActive }) => {
                return `${isActive ? activeLinkStyles : hoverLinkStyles} ${sharedLinkStyles}`
            }}> About</NavLink>
            <Divider />
            <NavLink to="/newsletter" onClick={() => closeOnClick()} className={({ isActive }) => {
                return `${isActive ? activeLinkStyles : hoverLinkStyles} ${sharedLinkStyles}`
            }}> Newsletter</NavLink>
        </div>
    )
}

export default PortalNavigation