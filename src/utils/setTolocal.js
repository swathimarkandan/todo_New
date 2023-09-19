import { CREW_LISTNAME } from "../Variables/constVariables";

function setTolocal(teams,TNames){
    console.log(TNames)
if(teams==="Multiteam"){
    let teamData={[TNames]:[]};
    CREW_LISTNAME.map((list,key)=>{
       teamData[TNames]=[...teamData[TNames],{[list]:{"Action":[],"States":[],"Key":key}}]
})
localStorage.setItem(teams,JSON.stringify(teamData));
}else if(teams==="Unique"){
    const teamData={[TNames]:{Action:[],state:[]}};
     localStorage.setItem(teams,JSON.stringify(teamData))
}
}
export default setTolocal;