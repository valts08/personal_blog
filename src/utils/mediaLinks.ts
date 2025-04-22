import githubLogo from '../../src/assets/images/logo-github.svg'
import xLogo from '../../src/assets/images/logo-x.svg'
import linkedinLogo from '../../src/assets/images/logo-linkedin.svg'
import frontendmentorLogo from '../../src/assets/images/logo-frontend-mentor.svg'

type MediaLink = {
    name: string,
    icon: string,
    link: string
}

interface MediaLinksObject {
    [key: string]: MediaLink
}

const mediaLinksInfo: MediaLinksObject = {
    'x': {
        name: "x",
        icon: xLogo,
        link: "https://x.com/home"
    }, 
    'github': {
        name: "github",
        icon: githubLogo,
        link: "https://github.com/"
    }, 
    'linkedin': {
        name: "linkedin",
        icon: linkedinLogo,
        link: "https://linkedin.com/"
    }, 
    'frontend-mentor': {
        name: "frontend-mentor",
        icon: frontendmentorLogo,
        link: "https://www.frontendmentor.io/home"
    }
}

export default mediaLinksInfo