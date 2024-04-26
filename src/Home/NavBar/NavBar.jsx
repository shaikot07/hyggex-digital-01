import { Link } from "react-router-dom";

const NavBar = () => {
    const link = <>
        <li> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#CC2229] hover:border-[#CC2229] hover:border-b-2 transition duration-300 focus:!text-white" to={'/'}>Home</Link> </li>
        <li> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#CC2229] hover:border-[#CC2229] hover:border-b-2 transition duration-300 focus:!text-white" to={'/'}>Flashcard</Link> </li>
        <li> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#CC2229] hover:border-[#CC2229] hover:border-b-2 transition duration-300 focus:!text-white" to={'/'}>Contact</Link> </li>
        <li> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#CC2229] hover:border-[#CC2229] hover:border-b-2 transition duration-300 focus:!text-white" to={'/'}>FAQ</Link> </li>
    </>
    return (
        <div className="navbar bg-[#FFFFFF] max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">LOGO</a>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {link}
                </ul>
            </div>
            <div className="navbar-end w-[110px]">
                <Link className="py-2 px-8 bg-gradient-to-b from-blue-900 to-blue-600 text-white rounded-3xl">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;