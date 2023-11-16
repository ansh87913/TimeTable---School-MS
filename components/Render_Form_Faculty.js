import { useState } from "react";
import "../App.css";

export function RenderFormFaculty(props)
{
    const [slots, setSlot] = useState();
    const [courses, setCourses] = useState();
    const [courses_name, setCName] = useState();
    const [category, setCategory] = useState();
    const [course_option, setCoption] = useState();
    const [class_nbr, setClass] = useState();

    const arr = [slots,courses,courses_name,category,course_option,class_nbr];

    const handleClick = ()=>{
        props.getState(arr);
    }

    return(
        <div className="flex">
            <table className="custom1">
                <tr>
                    <td><input placeholder="Course Code" className="custom2 rounded py-1 px-2" onChange={(event)=>{setCourses(event.target.value)}}></input></td>
                    <td><input placeholder="Course Name" className="custom2 rounded py-1 px-2" onChange={(event)=>{setCName(event.target.value)}}></input></td>
                    <td><input placeholder="Category" className="custom2 rounded py-1 px-2" onChange={(event)=>{setCategory(event.target.value)}}></input></td>
                    <td><input placeholder="Course Option" className="custom2 rounded py-1 px-2" onChange={(event)=>{setCoption(event.target.value)}}></input></td>
                    <td><input placeholder="Class Nbr" className="custom2 rounded py-1 px-2" onChange={(event)=>{setClass(event.target.value)}}></input></td>
                    <td><input placeholder="Slot" className="custom2 rounded py-1 px-2" onChange={(event)=>{setSlot(event.target.value)}}></input></td>
                </tr>
            </table>
            <button className="btn bg-danger rounded mt-3" onClick={handleClick} type="submit">Create Course</button>
        </div>
    );
}