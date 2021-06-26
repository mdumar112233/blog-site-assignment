import React from 'react';
import clientImg from '../../../Images/Rectangle1.png';
import './ClientReview.css';

const ClientReview = () => {
    return (
        <div className='review-container mt-10'>
            {/* <div className='flex flex-row'>
                <div className='client-area'>
                    <div className='client-text'>
                        <h3>Our Clients</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis tempore, facilis ducimus nisi quaerat incidunt dicta assumenda, cum architecto, eum iste nostrum sit excepturi est explicabo fugit eos. Tempora recusandae, quia quos, nostrum voluptatibus omnis fuga alias blanditiis eligendi itaque qui non deserunt nulla, exercitationem accusamus. Natus, libero consectetur nobis voluptatibus iste ea sint ratione assumenda aliquid quasi pariatur, distinctio nam odit molestias recusandae nihil</p>
                        </div>
                </div>
                <div className='building-img'>
                    <img src={clientImg} alt="" />
                </div>
            </div> */}

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block">readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
  </div>
</section>
        </div>
    );
};

export default ClientReview;