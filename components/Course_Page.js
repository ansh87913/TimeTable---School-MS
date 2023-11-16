import "../App.css";
import { FetchCourseDetails } from "./Fetch_Course_Details";
import { useState,useEffect } from "react";
import Axios from "axios";

export function CoursePage(props){
    var i = 0;

    const [data, setData] = useState([]);
    const [slots, setSlot] = useState([]);
    const [courses, setCourses] = useState([]);
    const [class_nbr, setClass] = useState([]);
    const [courses_name, setCName] = useState([]);
    const [course_option, setCoption] = useState([]);
    const [category, setCategory] = useState([]);
    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/students/get-student/"+props.id)
        .then((res)=>{
            if(res.status===200)
            {
                setData(res.data);
                setSlot(data.cslot.map((val) => val.slots));
                setCourses(data.cslot.map((val) => val.courses));
                setClass(data.cslot.map((val) => val.class_nbr));
                setCName(data.cslot.map((val) => val.courses_name));
                setCoption(data.cslot.map((val) => val.course_option));
                setCategory(data.cslot.map((val) => val.category));
                setFaculty(data.cslot.map((val) => val.faculty));
            }
        })
        .catch((err)=>console.log());
    });

    const renderData = ()=>{
        return slots.map(()=>{
            return <FetchCourseDetails id={props.id} obj1={slots} obj2={courses} obj3={class_nbr} obj4={courses_name} obj5={course_option} obj6={faculty} obj7={category} i={i++}/>
        })
    };
    
    return(
        <div>
            <table>
                <thead>
                    <th className="bor1 text-center" style={{width: "50px"}}>SNo.</th>
                    <th className="bor1 text-center" style={{width: "250px"}}>Course</th>
                    <th className="bor1 text-center">Category</th>
                    <th className="bor1 text-center">Course option</th>
                    <th className="bor1 text-center" style={{width: "130px"}}>Class Nbr</th>
                    <th className="bor1 text-center">Slot</th>
                    <th className="bor1 text-center" style={{width: "180px"}}>Faculty Details</th>
                    <th className="bor1 text-center" style={{width: "140px"}}>Remove Course</th>
                </thead>
                <tbody>
                    {slots?renderData():console.log("hh")}
                </tbody>
            </table>
        </div>
    )
}