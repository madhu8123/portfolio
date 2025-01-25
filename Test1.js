import { useEffect, useState } from "react";

export default function Test(){
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    useEffect(()=>{
        if (count1 === 5)
            console.log('reset to zero..............')
        const timeout = setTimeout(()=>{
            setCount1(0);
        },1000);
        return () => clearTimeout(timeout);
       
    },[count1,count2])
    return(
        <>
        <h1>set the count value{count1}</h1>
        <h2>set the count value{count2}</h2>
        <button onClick={()=>{setCount1(count1+1)}}>count1 </button>
        <button onClick={()=>{setCount2(count2+1)}}>count2</button>
        </>
    )
}