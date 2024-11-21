import React from 'react';
import Header from '../components/Header';
import BreakingNews from '../components/BreakingNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../layout-components/LeftNavbar';
import RightNavbar from '../layout-components/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header >
                <Header></Header>
                <BreakingNews></BreakingNews>
            </header>
            <nav className='pt-5'>
                <Navbar></Navbar>
            </nav>

            <main className='grid grid-cols-12 gap-3'>
                <aside className=' left col-span-3'>
                <LeftNavbar></LeftNavbar>
                </aside>
               <section className='main col-span-6'>
                <h2>News Container</h2>
                <Outlet></Outlet>
               </section>
               <aside className='right col-span-3'>
               <RightNavbar></RightNavbar>
               </aside>
            </main>
        </div>
    );
};

export default HomeLayout;