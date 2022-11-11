import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider.js/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyReviewsCard from './MyReviewsCard';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {

    const {user, logOut} = useContext(AuthContext)

    const [reviews, setReviews] = useState([])

    // dynamically loading reviews based on user email
    useEffect(() => {
        
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers : { authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then(res => {
            if(res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json()})
        .then(data => setReviews(data))

    },[user?.email, logOut])

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

    useTitle('My Reviews')

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