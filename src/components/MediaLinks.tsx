import LogoImg from "./LogoImg"
import useThemeContext from "../hooks/useThemeContext"
import mediaLinksInfo from "../utils/mediaLinks"

interface MediaLinkPlacement {
    placement?: string
}

const MediaLinks = ({ placement }: MediaLinkPlacement) => {
    const mediaLinksArray = Object.keys(mediaLinksInfo)
    const globalDarkTheme = useThemeContext()
    const focusStyles = "focus:outline-offset-3 focus:rounded-lg focus:border-sky-500/50"

    return (
        <>
            {mediaLinksArray && mediaLinksArray.map((mediaLink, index) => {
                return (
                    <a href={`${mediaLinksInfo[mediaLink].link}`} className={`${focusStyles}`}>
                        <div className={`${placement && placement === "footer" ? "" : "border-1 rounded-lg border-neutral-200"} ${globalDarkTheme ? "border-neutral-700" : ""} w-[40px] hover:bg-neutral-300`}>
                            <LogoImg key={index} logo={mediaLinksInfo[mediaLink]} />
                        </div>
                    </a>
                )
            })}
        </>
    )
}

export default MediaLinks