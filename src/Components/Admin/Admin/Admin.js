import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AddBlog from '../AddBlog';

const Admin = () => {
    const [loggedInUser, serLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);
    console.log(admin);

    useEffect(() => {
        fetch('https://glacial-thicket-40955.herokuapp.com/getAdmin')
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])
    
    const email = admin.find(admin => loggedInUser.email === admin.email);

    return (
        <div>
            {
                email ? <AddBlog></AddBlog> : <h3 className='manage-admin text-center'>This page only  admin can access</h3>
            }
        </div>
    );
};

export default Admin;