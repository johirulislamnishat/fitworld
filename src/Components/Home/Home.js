import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeCourse from '../HomeCourse/HomeCourse';
import './Home.css'

const Home = () => {

    const [courses, setCourse] = useState([]);
    const [enroll, setEnroll] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    const addCourse = (course) => {
        const newCourse = [...enroll, course]
        setEnroll(newCourse)

        return (
            <body>
                <Header></Header>

                <main>

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

                        <div className="bg-white">
                            {
                                courses.map(showCourses => <HomeCourse

                                    key={showCourses.id}
                                    sendCourses={showCourses}
                                    enroll={addCourse}

                                ></HomeCourse>)
                            }
                        </div>

                    </section>

                    <CourseDetails enroll={enroll}></CourseDetails>

                    {/* footer  */}
                    <Footer></Footer>
                </main>
            </body>
        );
    };

    export default Home;