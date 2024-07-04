import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card= (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        //pehlese like hua pda tha 
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev) => prev.filter( (cid)  => (cid !== course.id)));
            toast.warning("like removed")
        }
        else{
            //phlese liked nhi hai 
            //insert krna h ye course liked courses me 
            if(likedCourses.length ===0){
                setLikedCourses([course.id])
            }else{
                //non-empty phlese 
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("liked Successfully");
        }

    }

    return (
       <div className="w-[300px] bg-gray-600 rounded-md overflow-hidden bg-opacity-80">
        <div className="relative">
            <img src={course.image.url} />

            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1
            grid place-items-center">
            <button onClick={clickHandler}>
                {
                    likedCourses.includes(course.id)? (<FcLike fontSize="1.75rem" />): (<FcLikePlaceholder fontSize="1.75rem" />)
                }
            </button>
        </div>
        </div>

        

        <div>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className="text-white mt-2">
                {
                course.description.length >100? (course.description.substr(0,100))+"...":(course.description)
                }</p>
        </div>
       </div>
    );
}

export default Card;
