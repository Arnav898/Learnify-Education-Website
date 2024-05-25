import React from "react";
import "./courses.css";
import { online } from "../../data";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val, index) => ( // Added index parameter
              <div className='box' key={index}> {/* Added key prop */}
                <div className='img'>
                  <img src={val.cover} alt='' />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
