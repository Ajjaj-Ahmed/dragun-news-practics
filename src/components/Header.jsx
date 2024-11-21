import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center py-5'>
                <img src={logo} alt="" />
            </div>
            <p className='text-lg text-gray-400'>Journalism Without Fear or Favour</p>
            <h4>{moment().format("dddd, MMMM Do YYYY") }</h4>
        </div>
    );
};

export default Header;