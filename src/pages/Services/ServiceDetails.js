import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider.js/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AddReview from '../../Reviews/AddReview';


import ServiceReview from './ServiceReview';


const ServiceDetails = () => {

    const {user} = useContext(AuthContext)
    const service = useLoaderData({})

    const {_id, img, name, price, description, ratings} = service;

    const [reviews, setReviews] = useState([])
    // dynamically loading reviews based on service id
    useEffect(() => {
        fetch(`https://eye-care-server-ifazzzz.vercel.app/reviews?id=${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[_id])

    useTitle('Service Details')

    return (
         
        <div className="container mx-auto my-36">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20">

                <div className="w-full col-span-2 p-4 shadow-md bg-gray-50 text-gray-800 mx-auto">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <p className="mb-0 capitalize text-gray-800">{price}</p>
                        </div>                       
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-96 bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>Ratings : {ratings}</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Link className="block">
                                <h3 className="text-xl font-semibold text-cyan-600">{name}</h3>
                            </Link>
                            <p className="leading-snug text-gray-600">{description}</p>
                        </div>
                    </div>
                </div>

                <div className="my-12">
                    <h1 className="text-center text-2xl font-bold">
                        Reviews
                    </h1>

                    <div className="w-full">
                        {
                            reviews.map(review => 
                                <ServiceReview
                                key={review._id}
                                review={review}
                                ></ServiceReview>
                            )
                        }
                    </div>                   
                </div>

            </div>

            <div className="my-12">
                {
                    user?.uid?
                    <div className="my-28">
                    <h1 className="text-4xl font-semibold text-center">Please Add a Review</h1>
                    <AddReview id={_id}></AddReview>
                    </div>
                    :
                    <p className="p-2 text-center text-2xl font-bold bg-teal-400"> please <Link className="text-purple-600" to='/login'>login</Link> to add a review</p>
                }
            </div>

        </div>
    );
};

export default ServiceDetails;