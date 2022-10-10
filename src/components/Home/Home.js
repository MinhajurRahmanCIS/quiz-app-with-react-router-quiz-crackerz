import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'
const Home = () => {
    const quizTopics = useLoaderData();
    const topics = quizTopics.data;
    console.log(topics)
    return (
        <div>
            <h1 className='title-text'>Quiz's Section </h1>
            <h4 className='total-quiz-details'>Total {quizTopics.data.length} Quiz Found</h4>
            <div className='topic-container'>
              {
                topics.map(topic => <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
              }
            </div>
        </div>
    );
};

export default Home;