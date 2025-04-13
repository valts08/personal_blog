import { useState } from "react";
import useThemeContext from "../../hooks/useThemeContext";

const Newsletter = () => {
    const globalDarkTheme = useThemeContext()
    const [email, setEmail] = useState("")

    return (
        <section className="min-h-[750px] pt-10 pb-3">
            <article className={`${globalDarkTheme ? "text-white" : ""}`}>
                <h1 className="text-3xl font-bold pb-5">Newsletter</h1>
                <p className="leading-6 text-justify">
                    Want to stay updated on my latest articles, coding tutorials, and personal adventures? 
                    Sign up for my newsletter! It’s a simple way to keep track of new posts and occasional coding tips I discover. 
                    Just drop your email in the sign-up box, and I’ll send you updates whenever there’s something new to share.
                </p>
            </article>
            <article>
                <span className={`${globalDarkTheme ? "text-white" : ""} text-lg font-semibold block text-justify w-98/100 py-5`}>I’d love to have you along for the ride and also hear about your own journey!</span>
                <div className="flex flex-col">
                    <span className={`${globalDarkTheme ? "text-white" : ""}`}>Email Address</span>
                    <input className={`${globalDarkTheme ? "bg-neutral-800 border-neutral-600 text-neutral-300" : "border-gray-300 bg-white"}  border rounded-lg mt-1 mb-3 py-2 pl-2 w-auto`} type="text" value={email} placeholder="email@example.com"
                        onChange={(e) => setEmail(e.target.value)}/>
                    <button type="submit" className="max-w-[150px] rounded-lg font-medium bg-blue-300 py-3 px-5 hover:cursor-pointer">Stay updated</button>
                    <span className="mt-1 text-gray-500">Unsubscribe anytime. No spam, I promise 🙂</span>
                </div>
            </article>
        </section>
    );
}

export default Newsletter;