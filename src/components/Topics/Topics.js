import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizDatas = useLoaderData()
    const quizData = quizDatas.data;
    const {id,name,total,logo,questions} = quizData;
    
    return (
        <div className='mb-20'>
            <h1 className='m-10 text-3xl font-bold underline underline-offset-4'>Quizes Of <span className='text-red-700'>{name}</span> </h1>
            <div>
                {
                    questions.map(quest => <Topic quest = {quest} key={quest.id}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;