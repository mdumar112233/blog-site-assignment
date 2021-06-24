import React from 'react';
import BlogContent from '../BlogContent/BlogContent';
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <BlogContent></BlogContent>
        </div>
    );
};

export default Home;