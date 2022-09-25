import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton'
import ShowNum from './components/ShowNum';
import MyInput from './components/MyInput';

function App() {

  const [RHours, setRHours] = useState(0);
  const [RMin, setRMin] = useState(0);
  const [RSec, setRSec] = useState(0);

  const [Act, setAct] = useState("stop");
  const [color, setColor] = useState();

  const changeColor= ()=>{
     if(RSec<11 && RSec>0 && RMin === 0 && RHours === 0){
      setColor("tensec")
    }
    else{
      setColor("default")
    }
  };

  const handleSubmit= (event) =>{
    event.preventDefault();
    const H =parseInt(event.target[0].value);
    const M =parseInt(event.target[1].value);
    const S =parseInt(event.target[2].value);
    if(H>0){
    setRHours(H);
    }
    else setRHours(0);
    if(M>0){
      setRMin(M);
    }
    else setRMin(0);
    setRSec(S);
    setAct("stop");
  };

  const startTimer = ()=>{
    setAct("start");
    
  };
  
  const reset = ()=>{
    setRHours(0);
    setRMin(0);
    setRSec(0);
  };

  const stop = ()=>{ 
    setRHours(RHours);
    setRMin(RMin);
    setRSec(RSec);
    setAct("stop");
  };

  const start = ()=>{
    
      if(Act === "start"){
        changeColor();
              if(RSec === 0 && RMin === 0 && RHours === 0){
                reset()
                }
              else if(RMin === 0 && RSec === 0){
              
                setRHours(RHours-1);
                setRMin(59);
                setRSec(59);
              }
              else if(RSec === 0){
                setRHours(RHours);
                setRMin(RMin-1);
                setRSec(59);
              }
              else{
                setRHours(RHours);
                setRMin(RMin);
                setRSec(RSec- 1);
              }
        }
       else{
        setRHours(RHours);
        setRMin(RMin);
        setRSec(RSec);
       } 
      };

  useEffect(() => {

    const interval = setInterval(() => { 
      start()
    // setRSec(seconds => seconds);
  }, 1000);
    return () => clearInterval(interval);
  });




  return (
    <div className="App">

        
          <h2>Remaining Time</h2>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"5%",marginBottom:"-10%"}}>
          <ShowNum remain={color}>{RHours}</ShowNum>
          <h1>:</h1>
          <ShowNum remain={color}>{RMin}</ShowNum>
          <h1>:</h1>
          <ShowNum remain={color}>{RSec}</ShowNum>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:"5%"}}>
          <h3>Hours</h3>
          <h3>Minutes</h3>
          <h3>Seconds</h3>
          </div>
          <div style={{display:"flex",gap:"10%",justifyContent:"center"}}>
        <MyButton onClick={()=>{startTimer()}}>Start</MyButton>
        <MyButton onClick={()=>{reset()}}>Reset</MyButton>
        <MyButton onClick={()=>{stop()}}>Stop</MyButton>
       </div>
   
      
        <form onSubmit={(event)=>handleSubmit(event)} style={{display:"flex", gap:"5%", marginTop:"10%"}}>
        <MyInput digit="Hours"/>
        <MyInput digit="Min"/>
        <MyInput digit="Sec"/>
        <MyButton type="submit">Set</MyButton>
        </form>
    </div>
  )
}

export default App
