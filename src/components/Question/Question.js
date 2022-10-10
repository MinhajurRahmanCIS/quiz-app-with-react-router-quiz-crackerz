import React from 'react';
import './Question.css'
const Question = ({questionQuiz, count}) => {
    const {question, options,correctAnswer} = questionQuiz;
    
    const correctHandler = (answer) => {
        if(answer === correctAnswer){
            
        }
    }

    return (
        <div className='quiz-question-container'>
            <h3><strong>Question: {count}</strong> {} {question}</h3>
            <div className='options-container'>
              {options.map(answer => <div className='answer-container' key={answer} onClick={() => correctHandler(answer)}> {answer} </div>)}
            </div>
        </div>
    );
};

export default Question;