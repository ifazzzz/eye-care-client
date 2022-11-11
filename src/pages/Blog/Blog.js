import React from 'react';

const Blog = () => {
    return (
        <div>
           <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">What is the Difference between SQL and NoSQL?</h3>
                            <p className="mt-1 text-gray-600">From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirementshave generated interest in fundamentally differentechnologies.Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What is JWT, and how does it work?</h3>
                            <p className="mt-1 text-gray-600">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What is the difference between javascript and Node JS?</h3>
                            <p className="mt-1 text-gray-600">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">How does NodeJS handle multiple requests at the same time?</h3>
                            <p className="mt-1 text-gray-600">We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.How NodeJS handle multiple client requests?NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
    );
};

export default Blog;