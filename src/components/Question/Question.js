import React from 'react';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const Question = ({questionQuiz}) => {
    

    const {question, options,correctAnswer} = questionQuiz;
    const correctHandler = (answer) => {
        if(answer === correctAnswer){
            toast.success('Correct Answer', { position: "top-center" })
        }
        else{
            toast.error('Wrong Answer', { position: "top-center" })
        }
    }

    const showAnswers = (correctAnswer) => {
        toast.info(`The Answer is :  ${correctAnswer} `, { position: "top-center" })
    }

    return (
        <div className='quiz-question-container'>
            <div className='show-answer' onClick={() => showAnswers(correctAnswer)}>
            <FontAwesomeIcon className='eye' icon={faEye} />
            </div> <ToastContainer />
            <h3><strong>Question: </strong> {question}</h3>
            <div className='options-container'>
              {options.map(answer => <div className='answer-container' key={answer} onClick={() => correctHandler(answer)} > {answer} </div>)}<ToastContainer />
            </div>
        </div>
    );
};

export default Question;