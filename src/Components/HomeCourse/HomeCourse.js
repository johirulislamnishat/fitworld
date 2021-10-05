import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeCourse = (props) => {
    // console.log(props)

    const { id, img, title, price, duration, rating, } = props.sendCourses;

    return (

        <div>
            <div className='shadow rounded-lg'>
                <img className='w-full h-72 rounded-lg' src={img} alt="" />

                <div className='px-2 pb-3 mt-4'>
                    <h1>{title}</h1>

                    <div className='flex justify-between mt-2'>
                        <h1><span>Price: $</span>{price}</h1>
                        <h1>Duration: {duration}</h1>
                    </div>

                    <div className='mt-4 flex justify-between items-center'>
                        <NavLink to={`/sendCourses/${id}`} className='px-4 py-1 rounded-md bg-pink-500 text-white'>Enroll</NavLink>

                        <h1>Rating: {rating}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCourse;