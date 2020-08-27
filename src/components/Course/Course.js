import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Course.css'

const Course = (props) => {
    const addBtnHandle = props.addBtnHandle;
   
    const {name, instructor,img,price} = props.course;
    return (
        <div className="course-container">

<img src={img} alt=""/>
  
    <h6>{name}</h6>
    <p>Instructor: {instructor}</p>

    <h6>${price}</h6>
   
  <button onClick={() => addBtnHandle(props.course)} className="btn btn-primary"> Enroll Now </button>


        </div>
    );
};

export default Course;