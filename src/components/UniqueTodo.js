import {useLocation} from 'react-router-dom';
import { MdAutoDelete } from 'react-icons/md';
import { useState } from 'react';
function UniqueTodo(){
    const location=useLocation();
    const [Activity,setActivity]=useState("");
    const [myActivity,setMyactivity]=useState([])
    const setHobbis=()=>{
        if(Activity===""){window.alert("Enter Activity")}else
       { setMyactivity([...myActivity,Activity])
setActivity("");}
    }
    const deleteItem=(ind)=>{
        const referal=[...myActivity];
        referal.splice(ind,1)
        setMyactivity(referal)
    }
    return(<>
    <div id="uniqueHead">
    <div id="uniqueDesign">
        <div id="headandSave">
            <h1>{location.state}</h1>
            <button className='saveMe'onClick={()=>{setMyactivity([])
            setActivity("")}}>SAVE ME</button>
            <div id="setActivity">
                <input type="text" id="activityUnique" placeholder="Activity..."  value={Activity}  onChange={(e)=>setActivity(e.target.value)}/>
         <button onClick={()=>setHobbis()}>Add Activity</button>
            </div>
            <div>
                {myActivity.map((obj,ind)=>{
                   return  <div className="activityAnddelete"key="ind">
                        <p>{obj}</p>
                        <button onClick={()=>deleteItem(ind)}><MdAutoDelete/></button>
                        </div>
                })}
            </div>
        </div>
        </div>
        </div></>)
}
export default UniqueTodo