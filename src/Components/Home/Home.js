import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import HomeCourse from '../HomeCourse/HomeCourse';
import './Home.css'

const Home = () => {

    const [courses, setCourse] = useState([]);
    // const [enroll, setEnroll] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourse(data.slice(0, 4)))
    }, [])

    // const addCourse = (course) => {
    //     const newCourse = [...enroll, course]
    //     setEnroll(newCourse)

    return (
        <body>
            <main>

                {/* banner section  */}
                <section className='banner'>

                    <div className='overlay'>
                        {/* banner information */}
                        <div className='max-w-7xl mx-auto'>

                            <div className='bannerContent text-center'>
                                <h1 className='text-white text-4xl '>LEARN FROM THE WORLD’S GREATEST YOGA MINDS</h1>
                                <button className='mt-6 px-5 py-2 bg-pink-600 rounded-md text-white'>Start Now</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* course section  */}
                <section>

                    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                        {/* cart */}
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-8 '>
                            {
                                courses.map(showCourses => <HomeCourse

                                    key={showCourses.id}
                                    sendCourses={showCourses}
                                // enroll={addCourse}

                                ></HomeCourse>)
                            }
                        </div>

                        {/* Feature  */}
                        <Feature></Feature>
                    </div>

                </section>




            </main>
        </body >
    );
};

export default Home;