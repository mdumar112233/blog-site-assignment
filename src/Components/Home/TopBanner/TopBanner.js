import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className='banner'>
            <div className='content text-white'>
                <h1>HI-TECH DESIGN</h1>
                <small style={{color: '#A6A7AA'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio quidem quibusdam libero molestiae odit doloribus voluptatum inventore ad temporibus?</small>
                <button>EXPLORE</button>
            </div>
        </div>
    );
};

export default TopBanner;