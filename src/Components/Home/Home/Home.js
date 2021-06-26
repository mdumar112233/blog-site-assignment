import React from 'react';
import BlogContent from '../BlogContent/BlogContent';
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';
import ClientReview from '../ClientReview/ClientReview';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <BlogContent></BlogContent>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;