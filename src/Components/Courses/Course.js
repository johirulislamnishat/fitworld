import React, { useEffect } from 'react';
import { useState } from 'react';
import HomeCourse from '../HomeCourse/HomeCourse';
import './Course.css'

const Course = () => {

    const [courses, setCourse] = useState([]);
    // const [enroll, setEnroll] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div>
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

                {/* CourseDetail  */}
                <div>
                    {/* <CourseDetails enroll={enroll}></CourseDetails> */}
                </div>
            </div>

        </div>
    );
};

export default Course;