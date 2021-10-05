import React from 'react';
import logo from '../../logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>

            {/* --------
    footer start 
    ----------*/}
            <footer className="bg-gray-800 pt-10">
                <div className='max-w-7xl'>

                    <div className="text-gray-800 grid grid-cols-1 md:grid-cols-4 gap-6">

                        {/*  Col-1 */}
                        <div className="px-2">
                            {/*  Col Title */}
                            <div className=" text-xl text-white font-medium mb-6">
                                <img src={logo} alt="Logo" className="h-16 w-16" />
                            </div>

                            <p className="tmy-3 block text-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum earum quos tempore non, voluptate sunt maiores quo veniam rem ratione!</p>
                        </div>

                        {/*  Col-2 */}
                        <div className="px-2">
                            {/*  Col Title */}
                            <div className="text-xl text-white font-medium mb-6">
                                Support
                            </div>

                            {/*  Links */}
                            <a href="#" className="my-3 block text-gray-200 hover:text-gray-100 text-sm font-medium duration-700">
                                Help Center
                            </a>
                            <a href="#" className="my-3 block text-gray-200 hover:text-gray-100 text-sm font-medium duration-700">
                                Safety Center
                            </a>
                            <a href="#" className="my-3 block text-gray-200 hover:text-gray-100 text-sm font-medium duration-700">
                                Community Guidelines
                            </a>
                        </div>

                        {/*  Col-3 */}
                        <div className="px-2">
                            {/*  Col Title */}
                            <div className="text-xl text-white font-medium mb-6">
                                Legal
                            </div>

                            {/*  Links */}
                            <a href="#" className="my-3 block text-gray-200 hover:text-gray-100 text-sm font-medium duration-700">
                                Cookies Policy
                            </a>
                            <a href="privacy-policy.html"
                                className="my-3 block text-gray-200 hover:text-gray-100 text-sm font-medium duration-700">
                                Privacy Policy
                            </a>
                            <a href="#" className="my-3 block text-gray-200 hover:text-gray-100 text-sm font-medium duration-700">
                                Terms of Service
                            </a>
                            <a href="#" className="my-3 block text-gray-200 hover:text-gray-100 text-sm font-medium duration-700">
                                Law Enforcement
                            </a>
                        </div>

                        {/*  Col-3 */}
                        <div className="px-2">
                            {/*  Col Title */}
                            <div className="text-xl text-white font-medium mb-6">
                                Install App
                            </div>

                            {/* Links */}
                            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                <img src="./assets/icons/Google-Play-Badge.png" alt="Google-Play-Badge" />
                            </a>
                            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                <img src="./assets/icons/App-Store-Badge.png" alt="App-Store-Badge" />
                            </a>
                        </div>
                    </div>

                    {/*  Copyright Bar */}
                    <div className="pt-5">
                        <div className="flex pb-5 px-3 m-auto pt-5 
                    border-t border-gray-500 text-gray-300 text-sm 
                    flex-col md:flex-row max-w-6xl">
                            <div className="mt-2">
                                © 2021 Example app. All rights reserved
                            </div>

                            {/*  Required Unicons (if you want) */}
                            <div className="md:flex-auto md:justify-end  mt-2 space-x-3 flex-row flex">
                                <a href="#" className="flex items-center justify-center p-4 w-6 h-6 bg-gray-600 rounded-full ">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="flex items-center justify-center p-4 w-6 h-6 bg-gray-600 rounded-full">
                                    <i className="fab  fa-facebook"></i>
                                </a>
                                <a href="#" className="flex items-center justify-center p-4 w-6 h-6 bg-gray-600 rounded-full ">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="flex items-center justify-center p-4 w-6 h-6 bg-gray-600 rounded-full">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* footer end  */}
        </div>
    );
};

export default Footer;