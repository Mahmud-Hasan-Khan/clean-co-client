import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const MainLayout = ({ children }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Navbar></Navbar>
                    {/* Page content here */}
                    {children}
                </div>
                <SideBar></SideBar>
            </div>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node
}

export default MainLayout;