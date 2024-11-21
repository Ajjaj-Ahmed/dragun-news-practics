import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='space-x-3 *:text-xl'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
            <div className='flex gap-4'>
                <img className='w-12' src={user} alt="" />
                <button className='btn btn-outline'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;