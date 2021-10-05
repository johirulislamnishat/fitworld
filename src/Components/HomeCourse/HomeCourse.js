import React from 'react';

const HomeCourse = (props) => {
    console.log(props)

    const { img, title, price, duration, rating, } = props.sendCourses;

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-4 gap-x-6 xl:gap-x-8">
                <div className="group shadow-lg">

                    {/* course image */}
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img src={img} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                    </div>

                    {/* cart content  */}
                    <div className='px-2'>
                        <div className='grid grid-cols-5 mt-3'>
                            <h3 className="text-xl text-gray-700 col-span-4">
                                {title}
                            </h3>
                            <p className="text-lg font-medium text-gray-900 col-span-1">$ <span>{price}</span>
                            </p>
                        </div>

                        {/* cart footer  */}
                        <div className='flex justify-between mt-4'>
                            <div>
                                <button onClick={() => props.enroll(props.sendCourses)} className='px-5 py-1 text-white bg-pink-600 rounded-md'>Enroll</button>
                            </div>

                            <div>
                                <h1>Rating</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HomeCourse;