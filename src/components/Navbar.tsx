import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <>
            <div></div>
            <div>
                <Link to="/"> Home</Link>
                <Link to="/blog"> Blog</Link>
                <Link to="/about"> About</Link>
                <Link to="/newsletter"> Newsletter</Link>
            </div>
        </>
    );
}