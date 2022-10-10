import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <img src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-symbols-concept-questionnaire-show-sing-quiz-button-question-competition-exam-interview-modern-emblem_180786-72.jpg" alt="" />
            <nav className='navBar'>
            <Link to='/'>Topic</Link>
            
            <Link to='/'>Topic</Link>
        </nav>
        </div>
        
    );
};

export default Header;