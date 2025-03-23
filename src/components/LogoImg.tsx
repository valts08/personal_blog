const LogoImg = (props: any) => {

    let pageLink = '';

    switch (props.type) {
        case 'x':
            pageLink = `https://x.com/home`
            break;
        case 'github':
            pageLink = `https://github.com/`
            break;
        case 'linkedin':
            pageLink = `https://linkedin.com/`
            break;
        case 'frontend-mentor':
            pageLink = `https://www.frontendmentor.io/home`
            break;
        default:
            return
    }

    // figure out how to get a border on focus on the socials link buttons
    return (
        <a href={pageLink}>
            <div className="w-[40px] h-[40px] border-1 rounded-lg border-neutral-200 bg-neutral focus:outline-2 focus:outline-offset-4 focus:rounded-md focus:border-sky-600">
                <img 
                    className="my-[10px] mx-auto"
                    src={`/images/logo-${props.type}.svg`} 
                    alt={`${props.type}-logo`} 
                />
            </div>
        </a>
    )
}

export default LogoImg;