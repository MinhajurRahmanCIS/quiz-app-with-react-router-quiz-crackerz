import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
    const quizQuestion = useLoaderData();
    const options = quizQuestion.data.questions;
    console.log(options)
    return (
        <div>
          {
           options.map(question => <div><h3>{question.question}</h3></div> )
          }
        </div>
    );
};

export default Topic;