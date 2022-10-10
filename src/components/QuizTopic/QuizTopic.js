import React from 'react';
import './QuizTopic.css'
const QuizTopic = ({topic}) => {
    return (
        <div className='quizTopic-container'>
            <img src={topic.logo} alt="" />
            <div>
                <div className='quiz-details-container'>
                <h3>{topic.name}</h3>
                </div>
                <div className='quiz-start-btn'>
                    <button>Start Practice</button>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;