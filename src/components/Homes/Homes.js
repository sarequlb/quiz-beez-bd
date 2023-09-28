import React from 'react';
import './Homes.css'
import { useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';

const Homes = () => {
    const AllDatas = useLoaderData()
    const datas = AllDatas.data;
    return (
        <div className='header-container'>
            <div className='header  text-white mb-20'>
                <h1 className='text-7xl'>Quize <br />Contest</h1>
                <h1 className='text-3xl bg-yellow-300 px-4 py-1 text-slate-950 font-bold rounded mx-5'>2023</h1>
            </div>
            <div>
            <h1 className='text-3xl font-bold text-blue-800 mb-20'>Programing Quizzes</h1>
            <div className='flex justify-center'>
                
                <div className='grid md:grid-cols-2 sm:grid-cols-1 mb-10 xl:grid-cols-4  gap-10'>
                {
                    datas.map(data => <Home key={data.id} data={data}></Home>)
                }
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Homes;