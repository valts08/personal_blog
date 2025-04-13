import githubLogo from '../../src/assets/images/logo-github.svg'
import xLogo from '../../src/assets/images/logo-x.svg'
import linkedinLogo from '../../src/assets/images/logo-linkedin.svg'
import frontendmentorLogo from '../../src/assets/images/logo-frontend-mentor.svg'
import useThemeContext from '../hooks/useThemeContext'

const LogoImg = (props: any) => {

    const globalDarkTheme = useThemeContext()

    let pageLink = '';
    let imgSrc = '';

    switch (props.type) {
        case 'x':
            pageLink = `https://x.com/home`
            imgSrc = xLogo
            break;
        case 'github':
            pageLink = `https://github.com/`
            imgSrc = githubLogo
            break;
        case 'linkedin':
            pageLink = `https://linkedin.com/`
            imgSrc = linkedinLogo
            break;
        case 'frontend-mentor':
            pageLink = `https://www.frontendmentor.io/home`
            imgSrc = frontendmentorLogo
            break;
        default:
            return
    }

    // figure out how to get a border on focus on the socials link buttons
    return (
        <a href={pageLink}>
            <div className={`${globalDarkTheme ? "brightness-0 invert" : ""} w-[40px] h-[40px] bg-neutral focus:outline-2 focus:outline-offset-4 focus:rounded-md focus:border-sky-600`}>
                <img 
                    className="my-[10px] mx-auto"
                    src={imgSrc}
                    alt={`${props.type}-logo`}
                />
            </div>
        </a>
    )
}

export default LogoImg;