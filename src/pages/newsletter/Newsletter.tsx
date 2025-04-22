import { useForm, SubmitHandler } from "react-hook-form";
import errorIcon from "../../assets/images/icon-error.svg"
import successIcon from "../../assets/images/icon-success.svg"
import useThemeContext from "../../hooks/useThemeContext";

interface Inputs {
    email: string
}

const Newsletter = () => {
    const globalDarkTheme = useThemeContext()
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const focusStyles = "focus:outline-offset-4 focus:border-sky-500/50"

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitSuccessful }
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className={`${globalDarkTheme ? "bg-neutral-800 border-neutral-600 text-neutral-300" : "border-gray-300 bg-white"} ${isSubmitSuccessful ? "border-green-700" : ""} ${errors.email?.message ? "border-red-700" : ""} ${focusStyles} hover:cursor-pointer border rounded-lg mt-1 py-2 pl-2 w-100/100`} type="text" placeholder="email@example.com"
                            {...register("email",
                            {
                                required: "Email is required",
                                pattern: {
                                    value: emailRegEx,
                                    message: "Please enter a valid email address."
                            } })}/>
                            {isSubmitSuccessful && 
                                <div className="pt-2">
                                    <img src={successIcon} alt="success-icon" className="inline" />
                                    <span className="text-green-700 pl-2">You're subscribed! Check your email for updates.</span>
                                </div>
                            }
                            {!isSubmitSuccessful && errors.email?.message && 
                                <div className="pt-2">
                                    <img src={errorIcon} alt="error-icon" className="inline" />
                                    <span className="text-red-700 pl-2">{errors.email?.message}</span>
                                </div>
                            }
                        <input type="submit" defaultValue={`Stay updated`} className={`${focusStyles} block max-w-[150px] rounded-lg font-medium bg-blue-500/50 mt-3 py-3 px-5 hover:bg-blue-700/50 hover:cursor-pointer`}/>
                    </form>
                    <span className="mt-1 text-gray-500">Unsubscribe anytime. No spam, I promise 🙂</span>
                </div>
            </article>
        </section>
    );
}

export default Newsletter;