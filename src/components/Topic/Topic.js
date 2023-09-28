import React from 'react';

const Topic = ({quest}) => {
    console.log(quest)
    return (
        <div>
            <h1>{quest.id}</h1>
            <div>
                {
                    quest.question
                }
            </div>
        </div>
    );
};

export default Topic;