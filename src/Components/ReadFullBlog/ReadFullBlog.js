import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './ReadFullBlog.css';
import home1 from '../../Images/home1.jpg';
import { useParams } from 'react-router-dom';

const ReadFullBlog = () => {
    const {_id} = useParams();
    const [fullBlog, setFullBlog] = useState({});
    console.log(fullBlog);
    // console.log(id);

    useEffect(() => {
        fetch(`https://glacial-thicket-40955.herokuapp.com/fullBlog/${_id}`)
        .then(res => res.json())
        .then(data => setFullBlog(data[0]))
    },[_id])

    return (
        <div>
            <div className="navbar-area">
                <Navbar></Navbar>
            </div>
            <div className="full-blog">
                <h3>{fullBlog.text}</h3>
                <img src={fullBlog.image} alt="" />
                <p className='mt-3'>{fullBlog.message}</p>
            </div>
        </div>
    );
};

export default ReadFullBlog;