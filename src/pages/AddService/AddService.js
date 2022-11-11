import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddService = () => {

    const addService = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const description = form.description.value;
        
        const service = {
            name: name,
            img: img,
            price: price,
            ratings: ratings,
            description: description
        }

        fetch('http://localhost:5000/addedServices',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
             if(data.acknowledged){
                toast.success('Service added successfully')
                form.reset()
             }
        })
        .catch(err => console.error(err))
    }

    useTitle('Add Service')
    return (
        <div>
            <section className="p-6 bg-gray-100 text-gray-900">
                <form onSubmit={addService} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">                   
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="username" className="text-sm">name</label>
                                <input name="name" type="text" placeholder="service name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-600 border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="username" className="text-sm">Price</label>
                                <input name="price" type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-600 border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="username" className="text-sm">Ratings</label>
                                <input name="ratings" type="text" placeholder="Ratings" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-600 border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="website"  className="text-sm">image URL</label>
                                <input name="img" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-600 border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="bio" className="text-sm">description</label>
                                <textarea name="description" placeholder="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-600 border-gray-300 text-gray-900"></textarea>
                            </div>
                            <div className="col-span-full">                              
                                <div className="flex items-center space-x-2">                                  
                                    <button type="submit" className="px-4 py-2 border rounded-md border-gray-800">Add Service</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddService;