const LogoImg = (props: any) => {
    

    return (
        <img 
            className="border-1 rounded-lg border-neutral-200 bg-neutral" 
            src={`./assets/images/logo-${props.type}.svg`} 
            alt={`${props.type}-logo`} 
        />
    )
}

export default LogoImg ;