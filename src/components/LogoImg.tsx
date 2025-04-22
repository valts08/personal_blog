import useThemeContext from '../hooks/useThemeContext'

const LogoImg = ({ logo }: any) => {
    const globalDarkTheme = useThemeContext()

    return (
        <div className={`${globalDarkTheme ? "brightness-0 invert" : ""} w-[40px] bg-neutral`}>
            <img 
                className="my-[10px] mx-auto"
                src={logo.icon}
                alt={`${logo.name}-logo`}
            />
        </div>
    )
}

export default LogoImg;