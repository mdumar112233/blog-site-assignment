import React from 'react';
import BlogContent from '../BlogContent/BlogContent';
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';
import ClientReview from '../ClientReview/ClientReview';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <BlogContent></BlogContent>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;