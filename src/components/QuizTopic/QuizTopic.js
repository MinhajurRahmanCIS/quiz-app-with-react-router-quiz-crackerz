import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopic.css'
const QuizTopic = ({topic}) => {
    const {logo, name, id} = topic;
    return (
        <div className='quizTopic-container'>
            <img src={logo} alt="" />
            <div className='detail-container'>
                <div className='quiz-details-container'>
                <h3>{name}</h3>
                </div>
                <div className='quiz-btn'>
                    <button className='quiz-btn-container'><Link to={`/topic/${id}`} >Start Practice</Link></button>
                    
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;