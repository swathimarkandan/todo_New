     import images from "../utils/images"
    export function PersonLogo ({index,Names}){
return(<>
<div className="personLogo">
   <div><img src={images(index)}></img></div>
    <span>{Names}</span>
</div>
</>)
}
 