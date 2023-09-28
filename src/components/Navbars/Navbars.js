import React from 'react';
import { Link } from 'react-router-dom';
import './Navbars.css'

const Navbars = () => {
    return (
        <div className='flex justify-around py-7 shadow-2xl'>
            <div>
                <h1 className='md:lg:xl:text-3xl sm:text-2xl text-blue-800	font-bold'>Quiz Contest</h1>
            </div>
            <nav className='nav-link font-bold md:lg:xl:text-xl text-blue-800'>
                <Link to={'/'}>Home</Link>
                <Link to={'/topics'}>Topic</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blogs'}>Blogs</Link>
            </nav>

        </div>
    );
};

export default Navbars;