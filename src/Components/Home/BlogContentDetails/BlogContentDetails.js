import React from 'react';
import { useHistory } from 'react-router-dom';
import './BlogContentDetails.css';

const BlogContentDetails = (props) => {
    const {image, text, description, _id} = props.content;
    console.log(_id);
    // const id = _id;
    const history = useHistory();
    const handleBlog = () => {
       const url = `/readMore/${_id}`;
        history.push(url);
        console.log(url);
    }

    return (
        <div>
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto">
                <div class="flex flex-row -m-4">
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg" style={{width: '260px'}}>
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="content" />
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{text}</h2>
                    <p class="leading-relaxed text-base"  style={{color: '#A6A7AA'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aut dolorum eos ...?</p>
                    <div className='mt-2 flex flex-row'>
                        <button onClick={handleBlog}>Read more</button> <div className='button-line'></div>
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