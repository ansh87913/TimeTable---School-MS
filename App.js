import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { TimeTable } from './components/TimeTable';
import { Main } from './components/Main';
import { TimeTableFaculty } from './components/TimeTable_Faculty';
import {useState} from "react";
//import { HashRouter,Routes, Route } from 'react-router-dom';

function App() {
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  
  const getState = (val1, val2)=>{
    setId(val1);
    setType(val2);
  }

  /* TimeTable and Create_course could be rendered separately at this App.js page for faster creation of courses */
  return (
    <div>
      <Main getState={getState}/>
      {type==="faculty"?<TimeTableFaculty id={id}/>:<div><TimeTable id={id} type={type}/></div>}
    </div>
  );
}

export default App;
