import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizDatas = useLoaderData()
    const quizData = quizDatas.data;
    const {name,total,logo,questions} = quizData;
    console.log(questions.options)
    console.log(quizData)
    return (
        <div>
            <h1>topic of quioze</h1>
            <div>
                {
                    questions.map(quest => <Topic quest = {quest}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;