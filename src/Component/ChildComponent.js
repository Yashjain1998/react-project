import { useState} from "react";
function ChildComponent(prop){
    const[statevalue, newstate] = useState("");
    return(<>
        <h3> Find The Square </h3>
        <input type={Number} value={statevalue} onChange={(event) => newstate(event.target.value)}/>
        <p>{(statevalue==="")? '0':(statevalue*statevalue)}</p>
    </>);
}
export default ChildComponent;
