import useThemeContext from "../hooks/useThemeContext"
import LogoImg from "./LogoImg"

interface MediaLinkPlacement {
    placement?: string
}

const MediaLinks = ({ placement }: MediaLinkPlacement) => {
    const mediaLinksArray = ['x', 'github', 'linkedin', 'frontend-mentor']
    const globalDarkTheme = useThemeContext()

    return (
        <>
            {mediaLinksArray && mediaLinksArray.map((mediaLink, index) => {
                return (
                    <div className={`${placement && placement === "footer" ? "" : "border-1 rounded-lg border-neutral-200"} ${globalDarkTheme ? "border-neutral-700" : ""} h-[40px]`}>
                        <LogoImg key={index} type={mediaLink} /> {/* the width and height hack should be fixed, but for now ill leave it in */}
                    </div>
                )
            })}
        </>
    )
}

export default MediaLinks