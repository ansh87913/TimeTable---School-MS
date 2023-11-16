import Axios from "axios";
import {useEffect, useState} from "react";
import { RenderFormFaculty } from "./Render_Form_Faculty";
import "../App.css";

export function CreateCourseFaculty(props)
{
    const [toggle, setToggle] = useState(false);
    const [arr, setArr] = useState(); //new course data
    const [data,setData] = useState();

    Axios.get("http://localhost:4000/students/get-student/"+props.id)
    .then((res)=>{
        if(res.status===200)
        {
            console.log(res.data.cslot);
            setData(res.data.cslot);
        }
    })
    .catch((err)=>console.log());


    const handleClick = ()=>{
        setToggle(!toggle);
    }

    const getState = (out)=>{
        setArr(out);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the default form submission behavior
        console.log("Before Axios request");
        data.push({
            slots: arr[0],
            courses: arr[1],
            courses_name: arr[2],
            category: arr[3],
            course_option: arr[4],
            class_nbr: arr[5],
            faculty: "ff"
        });
        const newObj = {
            cslot: data
        };

        console.log(newObj);
    
        Axios.put("http://localhost:4000/students/get-student/" + props.id, newObj)
        .then((res) => {
            console.log("Axios request successful");
            if (res.status === 200) {
                window.location.reload();
                console.log("Record added");
            } 
            else {
                console.log("Unexpected response status:", res.status);
                    Promise.reject();
                }
        })
        .catch((err) => {
            console.log();
        });
    };
    
    

    return(
        <div className="flex mt-4">
            <button className="btn rounded bg-success my-3 border-black" onClick={handleClick}>Add Course</button>
            <form onSubmit={handleSubmit}>{toggle?<RenderFormFaculty getState={getState}/>:<p></p>}</form>
        </div>

    )
}