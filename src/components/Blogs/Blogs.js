import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='title-text'>Blogs <FontAwesomeIcon icon={faBlog} /> </h1>

            <div className='blogs-container'>

            <div className="blog bg-p">
                <h3>What is the purpose of react router?</h3>
                <p className='description'>
                React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component.
                </p>
            </div>
            <div className="blog bg-n">
                <h3>How does context API work?</h3>
                <p className='description'>
                In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                </p>
            </div>
            <div className="blog bg-p">
                <h3>What is useRef hook?</h3>
                <p className='description'>
                useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                Essentially, useRef is like a 'box' that can hold a mutable value in its .current property.
                
                </p>
            </div>
            

            </div>

        </div>
    );
};

export default Blogs;