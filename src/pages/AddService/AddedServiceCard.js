import React from 'react';

const AddedServiceCard = ({addedService}) => {

    const { img, name, price, description} = addedService;
    return (
        <div className="mx-auto">
            <div className="w-full p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-sky-600">{price}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                </div>
                <p className="text-gray-800">{description}</p>
            </div>
        </div>
    );
};

export default AddedServiceCard;