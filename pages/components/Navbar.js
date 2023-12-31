import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="navbar">
           <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
            <Link href="/profile">Profile</Link>
            </li>
           </ul>
        </nav>
    );
};