import React  from 'react';
import './ManageBlogDetails.css';

const ManageBlogDetails = ({blog}) => {

    const id = blog._id;
    const handleDelete = (e) => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                console.log(data);
                e.target.parentNode.parentNode.parentNode.style.display = 'none';
            }
        })
    }

        // const id = data._id;
      
    return (
        <div className='blog-detail'>
            <section class="text-gray-600 body-font" >
                <div class="container px-5  mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 p-6 rounded-lg" style={{width: '260px'}}>
                        <img class="h-40 rounded w-full object-cover object-center mb-6" src='' alt="content" />
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">title</h2>
                        <p class="leading-relaxed text-base"  style={{color: '#A6A7AA'}}>description</p>
                        <div className='mt-2 flex flex-row'>
                            <div className='flex flex-row'>
                                <button>Read more</button> <div className='button-line manage-btn-line'></div>
                            </div>
                            <div className='ml-12'>
                                <button onClick={handleDelete} className='delete-btn text-white'>Delete</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
        </div>
    );
};

export default ManageBlogDetails;