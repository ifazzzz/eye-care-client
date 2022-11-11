import React, { useEffect, useState } from 'react';
import AddedServiceCard from './AddedServiceCard';

const AddedServices = () => {

    const [addedServices, setAddedServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/addedServices')
        .then(res => res.json())
        .then(data => setAddedServices(data))
    }, [])
    
    return (
        <div>
            {
                addedServices.length > 0 && 
                <div>
                    <h1 className="text-4xl font-semibold text-center">
                    Added Services
                    </h1>
                    <div className="container mx-auto my-12">
                        <div className="grid md:grid-cols-2 gap-6">
                                {
                                    addedServices.map(addedService => <AddedServiceCard
                                    key={addedService._id}
                                    addedService={addedService}
                                    ></AddedServiceCard>)
                                }
                        </div> 
                    </div>    
                </div> 
            }    
        </div>
    );
};

export default AddedServices;