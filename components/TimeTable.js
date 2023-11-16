import "../App.css";
import Axios from "axios";
import {useEffect, useState} from "react";
import { CoursePage } from "./Course_Page";
import { CreateCourse } from "./Create_course";

//Create a parent web page to distinguish between faculty and student
export function TimeTable(props)
{
    const [data, setData] = useState([]);
    const [slots, setSlot] = useState([]);
    const [courses, setCourses] = useState([]);
    const [class_nbr, setClass] = useState([]);

    //useEffect only executes for once only when the component is mounted and when data is available
    useEffect(() => {
        Axios.get("http://localhost:4000/students/get-student/"+props.id)
        .then((res)=>{
            if(res.status===200)
            {
                setData(res.data);
                setSlot(data.cslot.map((val) => val.slots));
                setCourses(data.cslot.map((val) => val.courses));
                setClass(data.cslot.map((val) => val.class_nbr));
            }
        })
        .catch((err)=>console.log());

        //DO IN THIS FUNCTION SINCE WE CANNOT ACCESS THIS BEFORE SLOTS AND COURSES
        //Only if slots exists then the special class will be added to respective td
        if(slots && courses)
        {
            for(let i=0; i<slots.length; i++)
            {
                document.querySelectorAll("."+slots[i])[0].classList.add("special");
                document.querySelectorAll("."+slots[i])[0].innerHTML = slots[i]+"-"+courses[i]+"-"+class_nbr[i];
                if(document.querySelectorAll("."+slots[i])[1])
                {
                    document.querySelectorAll("."+slots[i])[1].classList.add("special");
                    document.querySelectorAll("."+slots[i])[1].innerHTML = slots[i]+"-"+courses[i]+"-"+class_nbr[i];
                }
            }
        }
    }, [props.id, data, data.cslot, slots, courses, class_nbr, props.remove]);
    

    return(
        <div class="align">
            {props.type==="student"?<div>{<CreateCourse id={props.id}/>}</div>:<div/>}
            <div>{<CoursePage id={props.id}/>}</div>
            <table className="mb-5">
                <tr>
                    <td rowSpan={2} className="px-2 bor2">Lecture</td>
                    <td className="px-2 bor2">Start</td>
                    <td className="px-3 bor3">08:00</td>
                    <td className="px-3 bor3">08:55</td>
                    <td className="px-3 bor3">09:50</td>
                    <td className="px-3 bor3">10:45</td>
                    <td className="px-3 bor3">11:40</td>
                    <td className="px-3 bor3">12:35</td>
                    <td className="px-3 bor3">Lunch</td>
                    <td className="px-3 bor3">02:00</td>
                    <td className="px-3 bor3">02:55</td>
                    <td className="px-3 bor3">03:50</td>
                    <td className="px-3 bor3">04:45</td>
                    <td className="px-3 bor3">05:40</td>
                    <td className="px-3 bor3">06:35</td>
                </tr>
                <tr>
                    <td className="px-2 bor2">End</td>
                    <td className="px-3 bor3">08:50</td>
                    <td className="px-3 bor3">09:45</td>
                    <td className="px-3 bor3">10:40</td>
                    <td className="px-3 bor3">11:35</td>
                    <td className="px-3 bor3">12:30</td>
                    <td className="px-3 bor3">01:25</td>
                    <td className="px-3 bor3">Lunch</td>
                    <td className="px-3 bor3">02:50</td>
                    <td className="px-3 bor3">03:45</td>
                    <td className="px-3 bor3">04:40</td>
                    <td className="px-3 bor3">05:35</td>
                    <td className="px-3 bor3">06:30</td>
                    <td className="px-3 bor3">07:25</td>
                </tr>
                
                <tr>
                <td className="px-2 bor2">MON</td>
                    <td className="px-2 bor2">Lecture</td>
                    <td className="px-3 bor A1">A1</td>
                    <td className="px-3 bor F1">F1</td>
                    <td className="px-3 bor D1">D1</td>
                    <td className="px-3 bor TB1">TB1</td>
                    <td className="px-3 bor TG1">TG1</td>
                    <td className="px-3 bor S11">S11</td>
                    <td className="px-3 bor">Lunch</td>
                    <td className="px-3 bor A2">A2</td>
                    <td className="px-3 bor F2">F2</td>
                    <td className="px-3 bor D2">D2</td>
                    <td className="px-3 bor TB2">TB2</td>
                    <td className="px-3 bor TG2">TG2</td>
                    <td className="px-3 bor S3">S3</td>
                </tr>

                <tr>
                <td className="px-2 bor2">TUE</td>
                    <td className="px-2 bor2">Lecture</td>
                    <td className="px-3 bor B1">B1</td>
                    <td className="px-3 bor G1">G1</td>
                    <td className="px-3 bor E1">E1</td>
                    <td className="px-3 bor TC1">TC1</td>
                    <td className="px-3 bor TAA1">TAA1</td>
                    <td className="px-3 bor S12">S12</td>
                    <td className="px-3 bor">Lunch</td>
                    <td className="px-3 bor B2">B2</td>
                    <td className="px-3 bor G2">G2</td>
                    <td className="px-3 bor E2">E2</td>
                    <td className="px-3 bor TC2">TC2</td>
                    <td className="px-3 bor TAA2">TAA2</td>
                    <td className="px-3 bor S1">S1</td>
                </tr>

                <tr>
                <td className="px-2 bor2">WED</td>
                    <td className="px-2 bor2">Lecture</td>
                    <td className="px-3 bor C1">C1</td>
                    <td className="px-3 bor A1">A1</td>
                    <td className="px-3 bor F1">F1</td>
                    <td className="px-3 bor TD1">TD1</td>
                    <td className="px-3 bor TBB1">TBB1</td>
                    <td className="px-3 bor S13">S13</td>
                    <td className="px-3 bor">Lunch</td>
                    <td className="px-3 bor C2">C2</td>
                    <td className="px-3 bor A2">A2</td>
                    <td className="px-3 bor F2">F2</td>
                    <td className="px-3 bor TD2">TD2</td>
                    <td className="px-3 bor TBB2">TBB2</td>
                    <td className="px-3 bor S4">S4</td>
                </tr>

                <tr>
                <td className="px-2 bor2">THU</td>
                    <td className="px-2 bor2">Lecture</td>
                    <td className="px-3 bor D1">D1</td>
                    <td className="px-3 bor B1">B1</td>
                    <td className="px-3 bor G1">G1</td>
                    <td className="px-3 bor TE1">TE1</td>
                    <td className="px-3 bor TCC1">TCC1</td>
                    <td className="px-3 bor S14">S14</td>
                    <td className="px-3 bor">Lunch</td>
                    <td className="px-3 bor D2">D2</td>
                    <td className="px-3 bor B2">B2</td>
                    <td className="px-3 bor G2">G2</td>
                    <td className="px-3 bor TE2">TE2</td>
                    <td className="px-3 bor TCC2">TCC2</td>
                    <td className="px-3 bor S2">S2</td>
                </tr>

                <tr>
                <td className="px-2 bor2">FRI</td>
                    <td className="px-2 bor2">Lecture</td>
                    <td className="px-3 bor E1">E1</td>
                    <td className="px-3 bor C1">C1</td>
                    <td className="px-3 bor TA1">TA1</td>
                    <td className="px-3 bor TF1">TF1</td>
                    <td className="px-3 bor TDD1">TDD1</td>
                    <td className="px-3 bor S15">S15</td>
                    <td className="px-3 bor ">Lunch</td>
                    <td className="px-3 bor E2">E2</td>
                    <td className="px-3 bor C2">C2</td>
                    <td className="px-3 bor TA2">TA2</td>
                    <td className="px-3 bor TF2">TF2</td>
                    <td className="px-3 bor TDD2">TDD2</td>
                    <td className="px-3 bor S5">S5</td>
                </tr>
            </table>
        </div>
    )
}