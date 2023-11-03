import { Link, NavLink } from "react-router-dom";

const navbar = () => {
    return (
        <>
            <div className="w-full navbar shadow-md">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <Link to='/' className="text-2xl font-medium">Clean Co</Link>
                </div>
                <div className="flex-none space-x-4 hidden lg:block">

                    {/* Navbar menu content here */}
                    <NavLink to='/about' className={({ isActive, isPending }) =>
                        isActive
                            ? "border-black border-b-2 "
                            : isPending
                                ? "pending"
                                : ""
                    } >About</NavLink>

                    <NavLink to='/contact' className={({ isActive, isPending }) =>
                        isActive
                            ? "border-black border-b-2 "
                            : isPending
                                ? "pending"
                                : ""
                    } >Contact</NavLink>

                    <NavLink to='/login' className={({ isActive, isPending }) =>
                        isActive
                            ? "border-black border-b-2 "
                            : isPending
                                ? "pending"
                                : ""
                    } >Login</NavLink>

                </div>
            </div>
        </>
    );
};

export default navbar;