import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex gap-3 bg-gray-300 rounded-lg'>
            <button className='btn bg-red-500 rounded-lg mr-3'>Latest</button>
            <Marquee className='space-x-3'>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
            </Marquee>

        </div>
    );
};

export default BreakingNews;