import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Topic.css'
const Topic = () => {
    const quizQuestion = useLoaderData();
    const options = quizQuestion.data.questions;
    return (
        <div >
            <h1 className='title-text'>Quiz of {quizQuestion.data.name}</h1>
            <p>Total <strong>{options.length}</strong> Question</p>
            <div className='question-container'>
            {
           options.map(questionQuiz => <Question key={questionQuiz.id} questionQuiz={questionQuiz} ></Question> )
           
          }
            </div>
         
        </div>
    );
};

export default Topic;