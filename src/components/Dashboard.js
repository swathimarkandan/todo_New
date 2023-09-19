import {CustomInpt} from "../commonComponent/CustomInputs"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { CREW_LISTNAME,ERROR_MESSAGE } from "../Variables/constVariables";
import setTolocal from "../utils/setTolocal"
import MemberNames from "../commonComponent/MemberNames";
function Dashboard() {
    const Navigate=useNavigate()
const[name,setName]=useState("");
const [crew_name,setCrewname]=useState("")
const [btnValue,setBtnvalue]=useState("");
const singleRoute=(choseteam)=>{
if(name===""){window.alert(ERROR_MESSAGE.name)
}else if(choseteam==="MultiteamTodo"){
    if(CREW_LISTNAME.length===0){window.alert(ERROR_MESSAGE.team_list)}else{
        setTimeout(()=>Navigate(`./${choseteam}`,{state:name}),500)
        console.log(name,"fvgbhn")
        setTolocal("Multiteam",name);
  setBtnvalue("setLaunch")
 }
}else if(choseteam==="UniqueTodo"){
    setTimeout(()=>{
        Navigate(`./${choseteam}`,{state:name})},500)
        setTolocal("Unique",name);
 setBtnvalue("setLaunch")
}
   
 }
 const commonFunction=(e)=>{
    const ELEMENTNAMES=e.target.name;
    const ELEMENTTYPE=e.target.type;
    if(ELEMENTTYPE==="button" && name!="" && ( ELEMENTNAMES==="MultiteamTodo"?
        CREW_LISTNAME.length===0?false:true:true) ){
               setBtnvalue(e.target.value);
 }
  
 if(ELEMENTNAMES==="Team"&&name==="") window.alert(ERROR_MESSAGE.name);
   if(ELEMENTNAMES==="add crew"){
        addwithList()
    }else if(ELEMENTNAMES==="MultiteamTodo"||ELEMENTNAMES==="UniqueTodo"){singleRoute(ELEMENTNAMES)}
    else{
        if(ELEMENTNAMES==="headingName"){
            setName(e.target.value)
        }else if(ELEMENTNAMES==="teamUniqu-Name"){
            setCrewname(e.target.value)
        }
    
}
}

function dynamicBtn(){
   let btnList= btnValue===""?[<CustomInpt type="button" value="Team"  name="Team"onClick={commonFunction}/>,
<CustomInpt  type="button"  value="Unique" onClick={commonFunction} name="UniqueTodo"/>
 
 ]
    :btnValue==="Team"||btnValue==="Add Crew"?[<CustomInpt type="button" name="add crew" value="Add Crew" onClick={
commonFunction
    }/>,
    <CustomInpt  type="button" value="Launch" name="MultiteamTodo" onClick={commonFunction}  />]  :
    [ <CustomInpt  type="button" value="Launching...."  />];
    return btnList
}

const addwithList=()=>{
// if(name===""){window.alert(ERROR_MESSAGE.name)}
 if(crew_name===""){window.alert(ERROR_MESSAGE.member_name)}else{
       CREW_LISTNAME.push(crew_name);
    }
    setCrewname("");
    }

    return(
       <>
       <div  className={btnValue==="setLaunch"?"outerDashbCen":"outerDashb"}></div>
    <div id="innerDashb">
 <h1>Set My<span>- Todo</span></h1>
		  <div id="getInput">
        {<CustomInpt type="text" onClick={commonFunction}  name="headingName"value={name} placeholder="Name..."/>} 
        {btnValue==="Team"||btnValue==="Add Crew"? <MemberNames setCrewname={setCrewname} name="teamUniqu-Name"commonFunction={commonFunction} crew_name={crew_name} /> :""}
        <div >
      
{dynamicBtn().map((obj)=>
 obj)}
        </div>
</div>
	</div>
 </>
    )
}
export default Dashboard;