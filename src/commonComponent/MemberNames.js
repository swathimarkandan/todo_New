import unqIndex from "../utils/images";
import {CREW_LISTNAME} from "../Variables/constVariables"
import { CustomInpt } from "./CustomInputs";
function MemberNames({ setCrewname,crew_name ,commonFunction,name }){
return(<div className="getMemberNames">
<img src={unqIndex(CREW_LISTNAME.length)} alt="alt"></img>
{<CustomInpt type="text" placeholder="Unique Name..." onClick={commonFunction} value={crew_name} name={name}

/>}
</div>)
}
export default MemberNames;