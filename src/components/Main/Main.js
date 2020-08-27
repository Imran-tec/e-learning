import React from 'react';
import course from '../../fakeData/Course';
import Course from '../Course/Course';
import './Main.css'
import Cart from '../Cart/Cart';
import { useState } from 'react';


const Main = () => {
    const courseData = course;
    const [courses, setCourses] = useState(courseData);

    const [cart, setCart ] = useState([]);

    const addBtnHandle= (course) => {
      
        const newCart = [...cart, course ]
        setCart(newCart)
    };

    return (
      
        <div className="main-container">
          
<div className="main-body"  >
       {
            
            courses.map(course =>  <Course key={course.id} addBtnHandle={addBtnHandle} course={course}></Course>)
        }
           </div>  
     
           <div className="cart"> 
               <Cart cart = {cart} > </Cart>
               </div>      
        </div>
    );
};

export default Main;