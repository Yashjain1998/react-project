// import logo from './logo.svg';
import './App.css';
import ChildComponent from "./Component/ChildComponent";
// import { useState, useEffect } from 'react'; 
function App() {
//2  const[name,rename]=useState("red");
// const[btnname, btnfunction]=useState(['OFF','ON']);
// console.log(1,);
// useEffect(function handleClick(){
//   // console.log(2,);
//   const arr=[...btnname].reverse();
//   btnfunction(arr);
// },btnname);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //    <p>       Edit <code>src/App.js</code> and save to reload.
    //      </p>
    //      <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <ChildComponent/>
      {/*2
      <p className={name}>Newton School</p>
      <button onClick={()=>{if(name==="red"){
        rename('blue');
      }else{
        rename('red');
      }}}>Change style</button>
     */}
       
        {/* <button type='button' onClick={handleClick()}>jjh</button>
        <br/>
        <button>ghh</button> */}
    </>
  );
}

export default App;
