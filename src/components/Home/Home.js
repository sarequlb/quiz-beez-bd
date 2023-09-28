import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = ({data}) => {
    const {name,total,logo,id} = data;
    return (
        <div className='shadow-2xl mx-5 quiz-container rounded-md'>
            <img className='bg-cyan-900 w-80 rounded-lg mb-2' src={logo} alt="" />
            <h1 className='text-blue-800 text-2xl font-bold'>{name}</h1>
            <h1 className='text-blue-800 text-xl font-semi-bold'>Total Quizzes: {total}</h1>
            <button className='bg-blue-900 text-white mb-10 px-5 py-2 rounded mt-5'> <Link to={`topic/${id}`}>Start Practice</Link>
            <FaArrowRight className='inline mx-2'></FaArrowRight>
            </button>
        </div>
    );
};

export default Home;