import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'

const Blogs = () => {
    return (
        <div>
            <h1 className='title-text'>Blogs <FontAwesomeIcon icon={faBlog} /> </h1>
        </div>
    );
};

export default Blogs;