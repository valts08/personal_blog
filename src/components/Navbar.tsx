import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [lightTheme, setLightTheme] = useState(true);

    return (
        <div className="text-neutral-700 px-2 flex justify-between border-2 rounded-lg min-h-[55px] items-center border-neutral-100">
            <img src="./assets/images/image-avatar.jpg" alt="profile-image" />
            <div className="flex gap-x-4 items-center">
                <Link to="/"> Home</Link>
                <Link to="/blog"> Blog</Link>
                <Link to="/about"> About</Link>
                <Link to="/newsletter"> Newsletter</Link>
                <button
                    className="border-1 rounded-lg border-neutral-200 bg-neutral-100 min-h-[40px] py-[5px]"
                    onClick={() => setLightTheme(!lightTheme)}>
                    <img src={lightTheme ? "../assets/images/icon-moon.svg" : "../assets/images/icon-sun.svg"} 
                    alt={lightTheme ? "moon-image" : "sun-image"} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;