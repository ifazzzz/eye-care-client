import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider.js/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    console.log(user);

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this?')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0){
                toast.success('deleted successfully')
                const remaining = reviews.filter(rv => rv._id !== id);
                 setReviews(remaining)
            }
         })
        }
         
    }
    return (
        <>
        {
            reviews.length === 0? 
               <div>
                   <h1>no reviews</h1>
               </div>
            :
            <div>
           {
            reviews.map(review => <MyReviewsCard
            key={review._id}
            review={review}
            handleDelete={handleDelete}
            ></MyReviewsCard>)
           }
        </div>

        }
        <ToastContainer/>
        </>
    );
};

export default MyReviews;