import LogoImg from "./LogoImg"
import useThemeContext from "../hooks/useThemeContext"
import mediaLinksInfo from "../utils/mediaLinks"

interface MediaLinkPlacement {
    placement?: string
}

const MediaLinks = ({ placement }: MediaLinkPlacement) => {
    const mediaLinksArray = Object.keys(mediaLinksInfo)
    const globalDarkTheme = useThemeContext()
    const focusStyles = "focus:outline-offset-4 focus:rounded-sm focus:border-sky-500/50"

    return (
        <>
            {mediaLinksArray && mediaLinksArray.map((mediaLink, index) => {
                return (
                    <a href={`${mediaLinksInfo[mediaLink].link}`}>
                        <div className={`${placement && placement === "footer" ? "" : "border-1 rounded-lg border-neutral-200"} ${globalDarkTheme ? "border-neutral-700" : ""} ${focusStyles}`}>
                            <LogoImg key={index} logo={mediaLinksInfo[mediaLink]} />
                        </div>
                    </a>
                )
            })}
        </>
    )
}

export default MediaLinks