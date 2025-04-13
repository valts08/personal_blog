import useThemeContext from "../hooks/useThemeContext"

const Divider = () => {
    const globalDarkTheme = useThemeContext()

    return <div className={`${globalDarkTheme ? "border-neutral-700" : "border-neutral-300"} border-b`}></div>
}

export default Divider