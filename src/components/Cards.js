import React from 'react'
import Card from './Card';
import { useState } from 'react';
const Cards = ({courses,category}) => {
    
    //Liked Btn
    

    const[likedCourses,setLikedCourses] = useState([]);
    let allCourses = [];

    //retunrs you a list of all courses received from the API response
    const getCourses = () =>{
        if(category ==="All"){
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            //hum isrf specific category ka data array krunga
            return courses[category];
        }
        
        
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
           {
            getCourses().map( (course) =>{

             return(
                  <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                )
           })

           }
    </div>
  )
}

export default Cards