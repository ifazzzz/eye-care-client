
import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceCard = ({service}) => {

    const {_id, img, name, price, description} = service;
    
    return (
        <div>
           <PhotoProvider> 
                <div className="w-full p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
                    {/* react photo viewer to view image on full screen*/}
                    <PhotoView src={img}> 
                        <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />        
                    </PhotoView>
                                 
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase text-cyan-600">Price: {price}</span>
                        <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                    </div>
                    <p className="text-gray-800 mb-6">{description.length>100 ? description.slice(0,100) + '...': description}</p>
                    <Link to={`/services/${_id}`} className="my-4 px-4 py-2 bg-teal-400 rounded-md">View details...</Link>
                </div>              
          </PhotoProvider>                         
        </div>
    );
};

export default ServiceCard;