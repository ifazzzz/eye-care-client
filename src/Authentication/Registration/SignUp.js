import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider.js/AuthProvider';
import image from '../../Assests/pexels-antoni-shkraba-6749742.jpg';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateUser(name,photoURL)
            form.reset()
            console.log(user);
        })
        .catch(err => {console.error(err)});

        const updateUser = (name, photoURL) => {
            const profile = {
                displayName : name,
                photoURL : photoURL
            }
            updateUserProfile(profile)
            .then(() => {})
            .catch(error => console.error(error))
        }
    }

    useTitle('Register')

    return (
        <div>
            <div className="relative">
                <img
                    src={image}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-opacity-75 bg-teal-400">
                    <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                    >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                    </svg>
                    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Lead Optometrist <br className="hidden md:block" />
                            Dr. Ifaz Ahmed
                        </h2>
                        <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                        An optometrist???s main role is to perform eye tests to detect vision problems, or health issues such as high blood pressure. They offer advice, prescribe spectacles and refer patients for treatment
                        </p>
                        <Link
                            
                            aria-label=""
                            className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                        >
                            Learn more
                            <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                            >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </Link>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                        <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                            Register For Appointment
                            </h3>
                            <form onSubmit={handleSubmit}>
                            <div className="mb-1 sm:mb-2">
                                <label
                                htmlFor="firstName"
                                className="inline-block mb-1 font-medium"
                                >
                                Full name
                                </label>
                                <input
                                placeholder="Full name"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="firstName"
                                name="name"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                htmlFor="lastName"
                                className="inline-block mb-1 font-medium"
                                >
                                Photo URL
                                </label>
                                <input
                                placeholder="PhotoURL"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="URL"
                                name="photoURL"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                htmlFor="email"
                                className="inline-block mb-1 font-medium"
                                >
                                E-mail
                                </label>
                                <input
                                placeholder="Enter You email address"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                htmlFor="password"
                                className="inline-block mb-1 font-medium"
                                >
                                password
                                </label>
                                <input
                                placeholder="type a password"
                                required
                                type="password"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                />
                            </div>
                            <div className="mt-4 mb-2 sm:mb-4">
                                <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-400 hover:bg-sky-500 focus:shadow-outline focus:outline-none"
                                >
                                Register
                                </button>
                            </div>
                            <p className="text-xs text-gray-600 sm:text-sm">
                                We respect your privacy. SignOut at any time.
                            </p>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;