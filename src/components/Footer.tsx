import MediaLinks from "./MediaLinks";
import useThemeContext from "../hooks/useThemeContext";
import Divider from "./Divider";

const Footer = () => {
    const globalDarkTheme = useThemeContext()

    return (
        <>
            <Divider />
            <footer className='pt-5 mb-5'>
                <div className='flex justify-between'>
                    <span className={`${globalDarkTheme ? "text-white" : ""} text-sm place-self-center`}>Made with ❤️ and ☕</span>
                    <div className="flex gap-x-2 place-self-center">
                        <MediaLinks placement="footer" />
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;