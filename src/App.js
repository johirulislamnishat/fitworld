import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home'
import HomeCourse from './Components/HomeCourse/HomeCourse';
import About from './Components/About/About'
import Footer from './Components/Footer/Footer';
import NotFound from './Components/Not-Found/NotFound'
import CourseDetails from './Components/CourseDetails/CourseDetails';
import ContactUs from './Components/ContactUs/ContactUs';
import Course from './Components/Courses/Course';

function App() {
  return (
    <div>

      <Router>
        <Header></Header>

        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/courses'>
            <Course></Course>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/contact'>
            <ContactUs></ContactUs>
          </Route>

          <Router path='/sendCourses/:courseId'>
            <CourseDetails>

            </CourseDetails>
          </Router>


          <Router path='*'>
            <NotFound></NotFound>
          </Router>
        </Switch>

        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
