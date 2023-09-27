import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from '../Navbars/Navbars';

const Main = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;