import { useState } from "react";

export default function States() {
  var [data, setData] = useState([1, 2, 3]);

  return (
    <>
      <h1>The array elements are: {data}</h1>
      <button
        onClick={() => {
          setData(data.map((value)=>value + 10))
        }}
        
      >

        Click here!!
      </button>
      <h2>{data}</h2>

    </>
  );

}