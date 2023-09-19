
export function CustomInpt(props){
   const{type,value,onClick,placeholder,name}=props;
     return(<>{type==="text"? <input type={type} value={value} name={name}
    onChange={(e)=>{onClick(e)
    }}  placeholder={placeholder}></input>:
     <input type={type}  name={name}
  onClick={(e)=>onClick(e)} 
  value={value}
    placeholder={placeholder}></input>}</>
   
    )
}
