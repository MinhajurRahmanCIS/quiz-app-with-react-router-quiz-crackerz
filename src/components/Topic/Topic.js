import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Topic.css'
const Topic = () => {
    const quizQuestion = useLoaderData();
    const options = quizQuestion.data.questions;
    console.log(options)
    return (
        <div className='topic-container'>
            <h1>Quiz of {quizQuestion.data.name}</h1>
            <p>Total <strong>{options.length}</strong>   question</p>
          {
           options.map(question => <div className='question-container'><h3>{question.question}</h3>
           <div className='quizQuestion-container'>
            <div className="quizQuestion">{question.options[0]}</div>
            <div className="quizQuestion">{question.options[1]}</div>
            <div className="quizQuestion">{question.options[2]}</div>
            <div className="quizQuestion">{question.options[3]}</div>
            
           </div>
           </div> )
          }
        </div>
    );
};

export default Topic;