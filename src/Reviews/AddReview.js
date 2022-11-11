import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider.js/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddReview = ({id}) => {

    const serviceId = id;

    const {user} = useContext(AuthContext)

    const addReview = (event) => {
        event.preventDefault();
        const form = event.target
        const message = form.message.value;
        const rating = form.rating.value;

        const review = {
            name : user.displayName,
            photoURL : user.photoURL,
            email : user.email,
            serviceId : serviceId,
            rating : rating,
            message : message
        }
        console.log(review);
        form.reset();

        fetch('https://eye-care-server-ifazzzz.vercel.app/addReview', {
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body : JSON.stringify(review)

        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
        if(data.acknowledged){
            window.location.reload(true);
            toast.success('review added successfully')
        }})
    }

    return (
        <div className="my-12">
            <div className="mx-auto w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  How Was Your Experience ?
                </h3>
                <form onSubmit={addReview}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Rate Out of 5
                    </label>
                    <input
                      
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      
                      name="rating"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Leave your feedback here"
                      required
                      type="text"
                      className="flex-grow w-full h-32 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"                    
                      name="message"
                    />
                  </div>
                  
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-400 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                    >
                     Add Review
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your Feedback 
                  </p>
                </form>
              </div>
            </div>
        </div>
    );
};

export default AddReview;