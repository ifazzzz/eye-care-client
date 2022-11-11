import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://eye-care-server-ifazzzz.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    useTitle('Services')

    return (
        <div>
        {
            services.length === 0 ? <div className="mx-auto my-48 w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
            :
            <div className="my-12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        }
        </div>
    );
};

export default Services;