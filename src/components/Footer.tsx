import LogoImg from "./LogoImg";

const Footer = () => {

    return (
        <>
            <div className='border border-neutral-300'></div>
            <footer className='pt-5 mb-5'>
                <div className='flex justify-between'>
                    <span className='text-sm justify-self-start'>Made with ❤️ and ☕</span>
                    <div className="flex gap-x-3.5">
                        <LogoImg type='x' />
                        <LogoImg type='github' />
                        <LogoImg type='linkedin' />
                        <LogoImg type='frontend-mentor' />
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;