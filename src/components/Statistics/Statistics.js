import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { Bar, BarChart, LabelList, Label, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AreaChart, ResponsiveContainer, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const Statistics = () => {
    const quizDatas = useLoaderData()
    const quizData = quizDatas.data
    console.log(quizData)
    return (
        <div className='mt-20'>
            <h1 className='text-3xl text-blue-800 font-bold mb-10'>Chart Of Quizes</h1>
            <div className='flex justify-center'>
                <ResponsiveContainer width="80%" height={600}>
                    <AreaChart data={quizData}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <ReferenceLine x="name" stroke="green" label="Min PAGE" />
                        <ReferenceLine y="total" label="Max" stroke="red" strokeDasharray="3 3" />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            {/* <BarChart
                width={990}
                height={450}
                data={quizData}
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name">
                    <Label value="Quizes of my website" offset={-3} position="insideBottom" />
                </XAxis>
                <Tooltip></Tooltip>
                <YAxis label={{ value: 'Total Quizes', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                <Bar dataKey="total" fill="#8884d8">
                    <LabelList dataKey="name" position="insideTop" color='r' angle="-40" />
                </Bar>
                <Bar dataKey="name" fill="#82ca9d">
                    <LabelList dataKey="total" position="top" />
                </Bar>
            </BarChart> */}
        </div >
    );
};

export default Statistics;