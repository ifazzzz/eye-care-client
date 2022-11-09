import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const DefaultServices = ({service}) => {

    const {_id, img, name, price, description} = service;

    return (
        <div className="">
            <div className="w-full">
                <Card imgSrc={img}>
                    <div className="flex justify-between">
                     <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                        </h5>
                     </div>
                     <div>
                     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Price: {price}
                        </h5>
                     </div>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description.length>200? description.slice(0, 200)+ '...' : description}
                    </p>
                    <Link to={`/services/${_id}`}><button className="text-center px-4 py-2 bg-teal-400 w-1/3">View Details</button></Link>
                </Card>
            </div>
        </div>
    );
};

export default DefaultServices;