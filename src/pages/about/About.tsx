import WorkspaceImgLarge from "../../assets/images/image-workspace-large.jpg"
import WorkspaceImgSmall from "../../assets/images/image-workspace-small.jpg"
import MediaLinks from "../../components/MediaLinks";
import PageHeading from "../../components/PageHeading";

const About = () => {

    return (
        <section className="min-h-[750px] pt-10 pb-3">
            <PageHeading>About</PageHeading>
            <article>
                <div className="py-5 text-justify">
                    <p>
                        Hi, I’m Paulina! Ever since I can remember, 
                        I’ve had a passion for creativity and problem-solving. 
                        That’s what led me to the world of front-end web development. 
                        There’s something magical about seeing an idea come to life in the browser—whether it’s a simple layout experiment or a complex interface for a bigger project.
                    </p>
                    <p className="py-5">
                        When I’m not coding, I love getting lost in a good book. My taste is pretty eclectic: 
                        I’ll happily read everything from fantasy novels to biographies of tech pioneers. 
                        Reading helps me unwind and often sparks new ideas for my coding projects.
                    </p>
                    <p>
                        Another big passion of mine is the great outdoors. 
                        Hiking allows me to disconnect from the digital world and reconnect with nature. 
                        I love challenging hikes with rewarding views at the top. And if I’m not on the trails, you might catch me rock climbing. 
                        The combination of mental focus and physical endurance is a perfect parallel to tackling tough coding challenges!
                    </p>
                </div>
                <h4>Some of my favorite books:</h4>
                <ul className="py-5 marker:text-gray-950">
                    <li>
                        <span className="font-semibold">“The Pragmatic Programmer”</span> by Andrew Hunt and David Thomas (for helpful insights into software development)
                    </li>
                    <li>
                        <span className="font-semibold">“Ready Player One”</span> by Ernest Cline (for some futuristic escapism)
                    </li>
                    <li>
                        <span className="font-semibold">“The Hobbit”</span> by J.R.R. Tolkien (for a bit of fantasy fun)
                    </li>
                    <li>
                        <span className="font-semibold">“Educated”</span> by Tara Westover (for incredible inspiration)
                    </li>
                </ul>
                <span>
                    I absolutely love my workspace as a place that inspires me to do my best work, so I thought I’d share it with you:
                </span>
                <div className="my-6">
                    <img className="rounded-xl" src={window.innerWidth > 500 ? WorkspaceImgLarge : WorkspaceImgSmall} alt="workspace-image" />
                </div>
                <p>
                    I hope this blog not only documents my growth but also helps others see that coding can be for everyone. 
                    Thanks for joining me on this journey!
                </p>
            </article>
            <article className="pb-9">
                <h2 className="text-2xl font-semibold py-4">Follow me</h2>
                <div className="flex gap-x-3 place-self-start">
                    <MediaLinks />
                </div>
            </article>
        </section>
    );
}

export default About;