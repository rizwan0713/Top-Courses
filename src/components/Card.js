import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';


const Card = ({ course, likedCourses, setLikedCourses }) => {
 

    function clickHandler(){

        if(likedCourses.includes(course.id)){
            //pehle se like hua pada tha
            setLikedCourses((prev) => prev.filter ((cid) => (cid !==course.id)));
            toast.warning("like removed");
        }
        else{
            //pehle se like nahi hai yey course
            //insert karna ha ye course liked courses me
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                // non-empty pehle se
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("liked Successfully");
        }

    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>
        <div className='relative '>
           <img src={course.image.url}></img>

           <div className='absolute bg-white rounded-full w-[40px] h-[40px] right-2 bottom-3 grid place-items-center'>
              <button onClick={clickHandler}>
           
                {
                    !likedCourses.includes(course.id)?
                    (<FcLikePlaceholder fontSize="1.75rem"/> ):
                    (<FcLike fontSize="1.75rem"></FcLike>)
                }

              </button>
           </div>

        </div>

        

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length >100 ?
                    (course.description.substr(0,100)) +"...":
                    (course.description)
                }
            </p>

        </div>
         
    </div>
  )
}

export default Card