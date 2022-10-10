import React from 'react';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({questionQuiz, count}) => {
    

    const {question, options,correctAnswer} = questionQuiz;
    
    const correctHandler = (answer) => {
        if(answer === correctAnswer){
            toast.success('Correct Answer', { position: "top-center" })
        }
        else{
            toast.warn('Wrong Answer', { position: "top-center" })
        }
    }

    return (
        <div className='quiz-question-container'>
            <h3><strong>Question: {count}</strong> {} {question}</h3>
            <div className='options-container'>
              {options.map(answer => <div className='answer-container' key={answer} onClick={() => correctHandler(answer)} > {answer} </div>)}<ToastContainer />
            </div>
        </div>
    );
};

export default Question;