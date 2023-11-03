import { NavLink } from "react-router-dom";


const SideBar = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 min-h-full bg-base-200">
                {/* Sidebar content here */}
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

            </ul>
        </div>
    );
};

export default SideBar;