import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Topic.css'
const Topic = () => {
    const quizQuestion = useLoaderData();
    const options = quizQuestion.data.questions;
    console.log(options)
    return (
        <div >
            <h1>Quiz of {quizQuestion.data.name}</h1>
            <p>Total <strong>{options.length}</strong>   question</p>
            <div className='question-container'>
            {
           options.map(questionQuiz => <Question key={questionQuiz.id} questionQuiz={questionQuiz} count={questionQuiz.length}></Question> )
           
          }
            </div>
         
        </div>
    );
};

export default Topic;