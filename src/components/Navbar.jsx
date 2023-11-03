import { Link, NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

const navbar = () => {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Swal.fire({
                //     position: 'center',
                //     icon: 'success',
                //     title: 'Logout Successful!',
                //     showConfirmButton: false,
                //     timer: 1500
                // })
                // navigate("/")
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

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

                    <div className="flex items-center gap-4 justify-center">
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

                        <div className="flex justify-center items-center gap-3">
                            {
                                user ?
                                    <>
                                        <p className='text-sm lg:text-base'>{user?.displayName}</p>
                                        <img
                                            className='rounded-full'
                                            src={user?.photoURL}
                                            alt='profile'
                                            height='34'
                                            width='34'
                                        />
                                        <Link onClick={handleLogout} className='bg-[#00AEEF] hover:bg-[#0395ff] px-3 py-1.5 rounded-full text-white font-medium hover:shadow-md' to="/login">Logout</Link>
                                    </>
                                    :
                                    <>
                                        <Link className='bg-[#00AEEF] hover:bg-[#0395ff] px-3 py-1.5 rounded-full text-white font-medium hover:shadow-md' to="/login">Login</Link>
                                    </>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default navbar;