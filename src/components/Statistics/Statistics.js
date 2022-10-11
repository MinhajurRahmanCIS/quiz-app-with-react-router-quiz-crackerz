import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    
    const statData = useLoaderData();
    const data = statData.data;
    return (
        <div>
            <h1 className='title-text'>Statistics Quiz Report <FontAwesomeIcon icon={faChartLine} /> </h1>
           <p>Total Quiz Question Report :</p>
            <div className='statistics-container'>
                <LineChart height={300} width={350} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />
                </LineChart>
                
            </div>
             <p><strong>Line Chart :</strong> Total Quiz Question Report</p>
        </div>
    );
};

export default Statistics;