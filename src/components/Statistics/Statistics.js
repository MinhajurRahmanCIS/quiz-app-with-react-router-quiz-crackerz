import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom';
const Statistics = () => {
    const data = useLoaderData();
    const statData = data.data;
    console.log(statData);
    return (
        <div>
            <h1 className='title-text'>Statistics Quiz Report <FontAwesomeIcon icon={faChartLine} /> </h1>

            <div>

            </div>
        </div>
    );
};

export default Statistics;