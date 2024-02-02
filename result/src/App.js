import './App.css';
import {useState} from 'react'

function App() {
  let [inputarr, setinputarr]=useState([])
  let [inputdata,setinputdata]=useState({
      name: "",
      rollno: "",
      sub1: "",
      sub2: "",
      sub3: "",
      })

       function changehandle(e){
        setinputdata({...inputdata,[e.target.name]: e.target.value})
       }

       let {name,rollno,sub1,sub2,sub3}=inputdata;
       function ans(){
        setinputarr([...inputarr,{name,rollno,sub1,sub2,sub3}])
        console.log(inputdata)
        setinputdata({name : "",rollno: "",sub1:"",sub2:"",sub3:"",})
       }
       function ans2(){
        console.log(inputarr);
       }
  return (
    <>
      <div>
        <tablee>
          <tr>
            <td>
              Roll No : <input type='text' name='rollno' value={inputdata.rollno} onChange={changehandle}></input><br></br>
              Name : <input type='text' name='name' value={inputdata.name} onChange={changehandle}></input><br></br>
              Subject 1 : <input type='text' name='sub1' value={inputdata.sub1} onChange={changehandle}></input><br></br>
              Subject 2 : <input type='text' name='sub2' value={inputdata.sub2} onChange={changehandle}></input><br></br>
              Subject 3 : <input type='text' name='sub3' value={inputdata.sub3} onChange={changehandle}></input><br></br>
            </td>
          </tr>
          <tr>
            <td><butto onClick={ans}>submit</butto></td>
          </tr>
        </tablee>
      </div>

      <table border={1}>
        <tbody>
          <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Sub 1</th>
              <th>Sub 2</th>
              <th>Sub 3</th>
              <th>Total</th>
              <th>Min</th>
              <th>Max</th>
              <th>Per</th>
          </tr>


          
          {inputarr.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.rollno}</td>
                <td>{data.name}</td>
                <td>{data.sub1}</td>
                <td>{data.sub2}</td>
                <td>{data.sub3}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>

  );
}

export default App;
