import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider.js/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {

    const {user} = useContext(AuthContext)

    const [reviews, setReviews] = useState([])

    // dynamically loading reviews based on user email
    useEffect(() => {
        
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))

    },[user?.email])

    // deleting review 
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this?')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Review deleted successfully')
                const remaining = reviews.filter(mr => mr._id !== id)
                setReviews(remaining)
            }
         })
         .catch(err => console.error(err))
        }
         
    }
    return (
        <div className="mx-auto my-24">
        {
            reviews.length === 0? 
               <div className="my-auto">
                   <h1 className="text-center text-5xl font-bold text-red-400">no reviews were added</h1>
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
        
        </div>
    );
};

export default MyReviews;