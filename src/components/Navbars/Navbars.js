import React from 'react';
import { Link } from 'react-router-dom';
import './Navbars.css'

const Navbars = () => {
    return (
        <div className='flex justify-around p-10 shadow-2xl'>
            <div>
                <h1 className='text-3xl text-blue-800	font-bold'>Quiz Beez</h1>
            </div>
            <nav className='nav-link font-bold text-xl text-blue-800'>
                <Link to={'/topics'}>Topic</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blog'}>Blog</Link>
            </nav>

        </div>
    );
};

export default Navbars;