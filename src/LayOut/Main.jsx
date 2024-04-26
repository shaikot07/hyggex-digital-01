
import { Outlet } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;