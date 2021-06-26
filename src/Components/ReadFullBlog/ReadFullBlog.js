import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './ReadFullBlog.css';
import home1 from '../../Images/home1.jpg';

const ReadFullBlog = () => {
    return (
        <div>
            <div className="navbar-area">
                <Navbar></Navbar>
            </div>
            <div className="full-blog">
                <h3>Triangle Roof</h3>
                <img src={home1} alt="" />
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iste! Ullam qui veniam dolores corporis laudantium consequuntur tempore facere dolorem quod, commodi, delectus quam cupiditate voluptate distinctio reiciendis eos aliquam assumenda ab voluptates alias. Est eligendi iusto veritatis nisi eveniet nemo, delectus ipsa veniam neque distinctio recusandae eaque inventore modi quod nobis quos ratione molestias nam blanditiis! Sed quasi beatae voluptates tempora eius nemo ducimus neque? Culpa nobis labore enim omnis deserunt iure ab suscipit, numquam ullam sequi cumque molestias velit cum eveniet laborum provident est exercitationem, ipsa atque. Sunt saepe possimus esse harum molestiae doloribus aperiam vero! Aliquam quam repellendus quas voluptatem! Perferendis, fugiat hic. Quam sequi fuga recusandae at fugiat accusamus blanditiis nam illo non iusto, possimus dolorum exercitationem alias labore maiores! Esse in consequuntur repellendus aperiam enim minus debitis eaque possimus corporis nobis sunt magni laboriosam cupiditate, perspiciatis et rem fugit nesciunt, ea veritatis voluptate magnam. Ducimus alias pariatur molestias ipsum rerum, impedit laudantium cum omnis autem repudiandae dolor blanditiis. Eaque libero, nemo repudiandae reprehenderit sapiente distinctio qui aliquid quasi incidunt minus corporis asperiores. Fuga saepe quam, nesciunt obcaecati cum placeat quod, delectus qui hic velit facere. Modi mollitia explicabo hic enim dolor consequatur expedita nisi molestias.</p>
            </div>
        </div>
    );
};

export default ReadFullBlog;