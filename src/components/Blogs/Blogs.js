import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='title-text'>Blogs <FontAwesomeIcon icon={faBlog} /> </h1>

            <div className='blogs-container'>

            <div className="blog">
                
            </div>
            <div className="blog">

            </div>
            <div className="blog">
                
            </div>

            </div>

        </div>
    );
};

export default Blogs;