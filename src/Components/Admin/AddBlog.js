import React from 'react';
import './AddBlog.css';
import Sidebar from '../Share/Sidebar/Sidebar';
import upload from '../../Images/cloud-computing.png';

const AddBlog = () => {
    const handleImage = () => {

    }
    return (
        <main className='flex flex-row'>
            <div className="sidebar">                
                <div>
                    <Sidebar></Sidebar>
                </div>
            </div>
            <div className='submit-container'>
                <h3>Add Blog</h3>
            <div className="submit-area">
            <div class="text-gray-600 body-font relative add-blog">
                <div class="container px-5 py-10 mx-auto flex">
                    <div class="lg:w-2/4 md:w-1/2 bg-white rounded-lg p-8 flex flex-col   w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Admin post</h2>
                    <div className='relative mb-4'>
                    <div className='cover-img'>
                        <p>Image</p>
                        <label className='image-upload flex flex-row' htmlFor="image">
                            <div className='mt-1 mr-1'><img  src={upload} alt=""/> </div><div>Upload image</div>  
                            </label><br/>
                        <input onChange={handleImage} id='image' type="file" style={{visibility: 'hidden'}}/>
                    </div>
                    </div>
                    <div class="relative mb-4 mt-14">
                        <label for="email" class="leading-7 text-sm text-gray-600">Title</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">Description</label>
                        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                    </div>
                </div>
             </div>
            </div>
            </div>
        </main>
    );
};

export default AddBlog;