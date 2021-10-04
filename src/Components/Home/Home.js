import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>

            <body>

                {/* banner section  */}
                <section className='banner'>

                    <div className='overlay'>
                        {/* banner information */}
                        <div className='max-w-7xl mx-auto'>

                            <div className='bannerContent text-center'>
                                <h1 className='text-white text-4xl '>LEARN FROM THE WORLD’S GREATEST YOGA MINDS</h1>
                                <button className='mt-6 px-5 py-2 bg-pink-600 rounded-md'>Start Now</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* feature section  */}
                <section className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                    <div className='grid grid-cols-2 md:grid-cols-4 bg-gray-200 h-28'>

                        <div>Grid 1</div>
                        <div>Grid 2</div>
                        <div>Grid 3</div>
                        <div>Grid 4</div>
                    </div>
                </section>

                {/* course section  */}
                <section>

                    <div class="bg-white">
                        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 class="sr-only">Products</h2>

                            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                <a href="#" class="group shadow-lg">

                                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">
                                        Earthen Bottle
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        $48
                                    </p>
                                </a>

                                <a href="#" class="group">
                                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">
                                        Nomad Tumbler
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        $35
                                    </p>
                                </a>

                                <a href="#" class="group">
                                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">
                                        Focus Paper Refill
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        $89
                                    </p>
                                </a>

                                <a href="#" class="group">
                                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">
                                        Machined Mechanical Pencil
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        $35
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>

                </section>

                {/* footer  */}
                <Footer></Footer>
            </body>
        </div>
    );
};

export default Home;