"use client"
import moment from 'moment';
import React, { useState, useEffect } from 'react';

const SubHeader = () => {
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY'));

    

    return (
        <div className=' max-w-screen-xl px-4 py-6 sm:px-6 lg:px-10 w-full flex items-end gap-4'>
            <h1 className='font-bold text-6xl text-primary'>Connections</h1>
            <p className='font-semibold text-primary text-2xl'>{currentTime}</p>
        </div>
    );
};

export default SubHeader;
