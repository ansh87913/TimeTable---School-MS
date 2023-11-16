import Axios from "axios";
import {useEffect, useState} from "react";

export function Main(props){
    const [data, setData] = useState([]);
    const [id, setID] = useState("");
    const [type, setType] = useState("");

    useEffect(()=>{
        Axios.get("http://localhost:4000/students")
        .then((res)=>{
            if(res.status===200)
            {
                setData(res.data);
            }
        })
        .catch((err)=>console.log(err));

        if(data[0])
        {
            data.type==="parent"?setID(data[1].std_id):setID(data[0]._id);
            data.type==="parent"?setType("parent"):setType(data[0].type)
            props.getState(id, type);
        }
    })



    return(
        <div>
            
        </div>
    )
}