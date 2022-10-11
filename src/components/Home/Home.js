import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears} from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    const quizTopics = useLoaderData();
    const topics = quizTopics.data;
    return (
        <div>
            <h1 className='title-text'> <FontAwesomeIcon icon={faGears} /> Quiz's Section <FontAwesomeIcon icon={faGears} /> </h1>
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