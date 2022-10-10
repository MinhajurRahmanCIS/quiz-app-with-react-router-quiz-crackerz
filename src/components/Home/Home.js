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
            <h1>All Quiz's  {quizTopics.data.length}</h1>
            <div className='topic-container'>
              {
                topics.map(topic => <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
              }
            </div>
        </div>
    );
};

export default Home;