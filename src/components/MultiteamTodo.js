import {useLocation,useNavigate} from 'react-router-dom';
import {PersonLogo} from "../commonComponent/TeamRows"
import {crewActivity,ERROR_MESSAGE} from "../Variables/constVariables"
import { MdAutoDelete } from 'react-icons/md';
import {useState} from "react";
function MultiteamTodo(){
    const location = useLocation();
    const Navigate=useNavigate()
    const TEAM_NAME=location.state
    const [userAction,setUserAction]=useState(crewActivity);
    let Data=JSON.parse(localStorage.getItem("Multiteam"));
   
   const [customData,setCustomdata]=useState(Data[TEAM_NAME]);
     const toArrays= Object.entries(customData);
    const onChangeInp=(e)=>{
    setUserAction({...userAction,[e.target.name]:e.target.value});
    }
   const deleteActivity=(parentInd,childInd,name)=>{
  const prevCustomData=[...customData];
let referal=customData[parentInd][name], NEW_Obj;
const actRe=[...referal.Action],stateRe=[...referal.States];
actRe.splice(childInd,1);
stateRe.splice(childInd,1);
NEW_Obj={name:{States:stateRe,Action:actRe}}
prevCustomData.splice(parentInd,1, NEW_Obj)
setCustomdata(prevCustomData)
   }
    const updatedList=(act)=>{
    let obj={},key,isPresent=false;
    for(let I=0;I<customData.length;I++){
if(Object.keys(customData[I])[0]===userAction.names) {
isPresent=true
key=I;
break};
    }
    
      if(isPresent==false){alert(ERROR_MESSAGE.isPresent)}else{
        obj=customData[key][userAction.names];
        obj.Action=[...obj.Action,userAction.activity];
        obj.States=[...obj.States,userAction.level]
  const finalSet={[userAction.names]:{obj}};
  const custonOld=[...customData];
  custonOld.splice(key,1,finalSet);
  setCustomdata(customData);
  setUserAction(crewActivity);
      }
    }
const deleteCrew=(index)=>{
    const referal=[...customData];
    referal.splice(index,1);
    console.log(referal)
    setCustomdata(referal)
}

    const updateAction=()=>{
        if(userAction.names===""||userAction.level===""||userAction.activity===""){
            alert(`Enter ${userAction.names===""?"Name":userAction.level===""?"Priority":"Activity"}`)
        }else{
            updatedList()
        }
    }
    return(<>
    <div id="Mutiteam-Body">
        <div id="Multiteam-Container">
    <h1>{TEAM_NAME}</h1>
    <button className="saveMe" onClick={()=>localStorage.setItem("Multiteam",JSON.stringify(customData))}>SAVE</button>
     <hr/>
     <div id="scannerInput">
        <input type="text" value={userAction["names"]} name="names" onChange={(e)=>onChangeInp(e)} placeholder='Name...'></input>
        <input type="text" value={userAction["activity"]} name="activity" placeholder='Activity...' onChange={(e)=>onChangeInp(e)}></input>
        <select value={userAction["level"]} name="level" onChange={(e)=>onChangeInp(e)}>
            <option hidden selected></option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
        </select>
        <button  className='btnAdd' onClick={()=>updateAction()} >ADD</button>
     </div>
    <div>
        <table>
          <thead>
           <tr>
        <td>Name</td>
        <td>Activity And Level</td>
         <td>Edit/Update</td>
           </tr>
      </thead>
      <tbody>
      {customData.map((item,index)=>{
    return<>
    <tr key={index} className="trow">
         <td>{<PersonLogo index={index} Names={Object.keys(item)}/>}</td>
         <td>   
        {customData[index][Object.keys(item)]["Action"].map((activity,ind)=>{
         return <tr className="activityStates"key={ind}>
     <td>{activity}</td>
     <td>{customData[index][Object.keys(item)]["States"][ind]}</td>
     <td><button onClick={()=>deleteActivity(index,ind,Object.keys(item)[0])}>{<MdAutoDelete/>}</button></td>
         </tr>
        })}
   </td>
   <td className='EditDeletebtn'>
   <button id="edit" onClick={()=>{setUserAction({...userAction,names:Object.keys(item)[0]})}}>Add Activity</button>
   <button id="delete" onClick={()=>{
    deleteCrew(index)}}>Delete Crew</button>
   </td>
    </tr>
    <tr>
    <hr/>
    </tr>
    </>
 })}
      </tbody>
        </table>
    </div>
    <div>
        </div>
    </div>
    </div>
    </>)
}
export default MultiteamTodo