import React, { useState } from 'react';
import './AddBlog.css';
import Sidebar from '../Share/Sidebar/Sidebar';
import upload from '../../Images/cloud-computing.png';
import axios from 'axios';

const AddBlog = () => {
    const [serviceData, setServiceData] = useState({});
    const [imageUrl, setImageUrl] = useState(null);


    const handleChange= (e) => {
        const newData = {...serviceData};
        newData[e.target.name] = e.target.value;
        setServiceData(newData);
    }

    const handleImage = e => {
        console.log(e.target.files);
        const imageData = new FormData();
        imageData.set('key', '0bbd94d120064c98ef673307396657da');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
            setImageUrl(res.data.data.display_url);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleSubmit = () => {
        const submitData = {...serviceData, image: imageUrl}
        console.log(submitData);

        if(imageUrl){
            fetch('https://glacial-thicket-40955.herokuapp.com/blogInfo', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(submitData)
            })
            .then(res => {
                console.log('service data uploaded');
            })
        }
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
                        <input onBlur={handleChange} type="text" id="email" name="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">Description</label>
                        <textarea onBlur={handleChange} id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button onClick={handleSubmit} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                    </div>
                </div>
             </div>
            </div>
            </div>
        </main>
    );
};

export default AddBlog;