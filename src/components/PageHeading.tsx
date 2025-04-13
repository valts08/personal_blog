import useThemeContext from "../hooks/useThemeContext"

const PageHeading = ({ children }: any) => {

    const globalDarkTheme = useThemeContext()

    return (
        <h1 className={`${globalDarkTheme ? "text-white" : ""} text-3xl font-bold pb-5 underline decoration-sky-500/50 decoration-6 underline-offset-0`}>
            {children}
        </h1>
    )
}

export default PageHeading