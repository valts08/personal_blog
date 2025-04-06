import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("")

    return (
        <section className="min-h-[750px] pt-10 pb-3">
            <h1 className="text-3xl font-bold pb-5">Newsletter</h1>
            <p className="leading-6 text-justify">
                Want to stay updated on my latest articles, coding tutorials, and personal adventures? 
                Sign up for my newsletter! It’s a simple way to keep track of new posts and occasional coding tips I discover. 
                Just drop your email in the sign-up box, and I’ll send you updates whenever there’s something new to share.
            </p>
            <article>
                <span className="text-lg font-semibold block text-justify w-98/100 py-5">I’d love to have you along for the ride and also hear about your own journey!</span>
                <div className="flex flex-col">
                    <span className="">Email Address</span>
                    <input className="border border-gray-300 bg-white rounded-lg mt-1 mb-3 py-2 pl-2 w-auto" type="text" value={email} placeholder="email@example.com"
                        onChange={(e) => setEmail(e.target.value)}/>
                    <button type="submit" className="max-w-[150px] rounded-lg font-medium bg-blue-300 py-3 px-5 hover:cursor-pointer">Stay updated</button>
                    <span className="mt-1 text-gray-500">Unsubscribe anytime. No spam, I promise 🙂</span>
                </div>
            </article>
        </section>
    );
}

export default Newsletter;