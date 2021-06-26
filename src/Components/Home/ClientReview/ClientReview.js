import React from 'react';
import clientImg from '../../../Images/Rectangle1.png';

const ClientReview = () => {
    return (
        <div className='review-container'>
            <div className='flex flex-row'>
                <div className=''>
                    <h3>Our Clients</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis tempore, facilis ducimus nisi quaerat incidunt dicta assumenda, cum architecto, eum iste nostrum sit excepturi est explicabo fugit eos. Tempora recusandae, quia quos, nostrum voluptatibus omnis fuga alias blanditiis eligendi itaque qui non deserunt nulla, exercitationem accusamus. Natus, libero consectetur nobis voluptatibus iste ea sint ratione assumenda aliquid quasi pariatur, distinctio nam odit molestias recusandae nihil et nesciunt repellat doloribus fugit tenetur sit corrupti at. Quo iure nisi iusto atque veritatis repellat laborum eveniet sequi temporibus fugiat ratione nulla architecto beatae sint qui quis esse voluptate nam, perspiciatis nobis dolorum!</p>
                </div>
                <div>
                    <img src={clientImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ClientReview;