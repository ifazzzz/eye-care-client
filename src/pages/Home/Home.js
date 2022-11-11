import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assests/pexels-cottonbro-studio-7580252.jpg';
import SignUp from '../../Authentication/Registration/SignUp';
import AddedServices from '../AddService/AddedServices';
import DefaultServices from './DefaultServices';

const Home = () => {
     
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://eye-care-server-ifazzzz.vercel.app/defaultServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            {/* Banner section */}
            <div className="bg-sky-500 relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                    >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src={img}
                    alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                        Brand new
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Bring Their World
                        <br className="hidden md:block" />
                        Into Focus{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                        For Tomorrow
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                    Vision screenings are not comprehensive eye exams. Screenings usually take only a few minutes and are often performed by volunteers who are not eye care professionals.
                    </p>
                    <div className="flex items-center">
                        <Link
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-sky-600 focus:shadow-outline focus:outline-none"
                        >
                        Get started
                        </Link>
                        <Link to='/blog'
                        aria-label=""
                        className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                        Learn more
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            
            {/* service section */}
            <div className="my-28">
                <h1 className="text-4xl font-semibold text-center">
                    Services
                </h1>
                {
                    services.length === 0 ? <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
                    :
                    <div className="my-12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        services.map(service => <DefaultServices
                        key={service._id}
                        service={service}
                        ></DefaultServices>)
                    }               
                    </div>
                }              
            </div>

            <div className="container mb-8 mx-auto text-center">
            <Link to='/services'><button className="bg-teal-400 rounded-md px-4 py-2 ">View All</button></Link>
            </div>
            {/* added Services */}
            <AddedServices></AddedServices>
            {/* feature section */}
            <div className="my-28">
            <SignUp/>
            </div>
            {/* pricing section */}
            <section className="mb-60 py-2 text-gray-800">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <span className="font-bold tracking-wider uppercase text-sky-600">Pricing</span>
                        <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
                    </div>
                    <div className="flex flex-wrap items-stretch -mx-4">
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Find your glasses</h4>
                                    <span className="text-6xl font-bold">$149</span>
                                </div>
                                <p className="mt-3 leading-relaxed text-gray-600">Branded glasses & examination</p>
                                <ul className="flex-1 mb-6 text-gray-600">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Professional examination</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Glasses tryout</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Choose glasses brand</span>
                                    </li>
                                </ul>
                                <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-sky-400 text-gray-50">Get Started</button>
                            </div>
                        </div>
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-sky-400 text-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Contact Lenses</h4>
                                    <span className="text-6xl font-bold">$189
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed">Professional examination & lenses</p>
                                <ul className="flex-1 space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Professional examination</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Lenses tryout</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Choose lense brand</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Contact lenses fluid</span>
                                    </li>
                                </ul>
                                <Link className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-100 text-cyan-600">Get Started</Link>
                            </div>
                        </div>
                        <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Lasik surgery</h4>
                                    <span className="text-6xl font-bold">$449
                                        
                                    </span>
                                </div>
                                <p className="leading-relaxed text-gray-600">Professional examination</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Surgery preparation</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Lasik surgery</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Control checkup</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>After surgery examination</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Surgery preparation</span>
                                    </li>
                                </ul>
                                <Link className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-sky-400 text-gray-50">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;