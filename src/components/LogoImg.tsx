const LogoImg = (props: any) => {

    // figure out how to get a border on focus on the socials link buttons
    return (
        <div className="focus:outline-2 focus:outline-offset-4 focus:rounded-md focus:border-sky-600">
            <img 
                className="border-1 rounded-lg border-neutral-200 bg-neutral" 
                src={`./assets/images/logo-${props.type}.svg`} 
                alt={`${props.type}-logo`} 
            />
        </div>
    )
}

export default LogoImg;