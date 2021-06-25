import React from 'react';
import './BlogContentDetails.css';

const BlogContentDetails = (props) => {
    const {image, title, description} = props.content;
    return (
        <div>
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Blog Content</h1>
                    <div class="h-1 w-20 bg-gray-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A fugiat in culpa aut hic omnis consequatur corrupti reprehenderit nesciunt debitis magnam aperiam numquam, perspiciatis ipsam, voluptatum pariatur exercitationem</p>
                </div>
                <div class="flex flex-wrap -m-4">
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="content" />
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
                    <p class="leading-relaxed text-base"  style={{color: '#A6A7AA'}}>{description}</p>
                    <div className='mt-2 flex flex-row'>
                        <button>Read more</button> <div className='button-line'></div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default BlogContentDetails;