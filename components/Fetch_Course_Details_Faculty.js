import Axios from "axios";

export function FetchCourseDetailsFaculty(props){

    const handleClick = () => {
        Axios.get("http://localhost:4000/students/get-student/" + props.id)
          .then((res) => {
            if (res.status === 200) {
              console.log(props.i);
              const currentData = res.data.cslot;

              currentData.splice(props.i, 1);
    
              const newObj = {
                cslot: currentData,
              };
    
              console.log(newObj);
    
              Axios.put("http://localhost:4000/students/get-student/" + props.id, newObj)
                .then((res) => {
                  console.log("Axios request successful");
                  if (res.status === 200) {
                    window.location.reload();
                    console.log("Record removed");
                  } else {
                    console.log("Unexpected response status:", res.status);
                    Promise.reject();
                  }
                })
                .catch((err) => {
                  console.log();
                });
            }
          })
          .catch((err) => console.log());
      };
    
      

    return(
        <tr>
            <td className="bor4">{props.i+1}</td>
            <td className="bor4">{props.obj2[props.i] + "-" + props.obj4[props.i]}</td>
            <td className="bor4">{props.obj7[props.i]}</td>
            <td className="bor4">{props.obj5[props.i]}</td>
            <td className="bor4">{props.obj3[props.i]}</td>
            <td className="bor4">{props.obj1[props.i]}</td>
            <td className="bor4"><button className="btn bg-danger border-black text" onClick={handleClick}>Remove</button></td>
        </tr>
    )
}