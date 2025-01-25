// import React, { useState } from "react";

// export default function Form1() {
//     const [input, setInput] = useState({
//         roll: "",
//         name: "",
//         city: ""
//     });

//     function formSubmit(event) {
//         event.preventDefault();
//         console.log('Success:', input.name, input.roll, input.city);
//     }

//     return (
//         <>
//             <form onSubmit={formSubmit}>
//                 Name: 
//                 <input 
//                     type="text" 
//                     onChange={(data) => setInput({ ...input, name: data.target.value })} 
//                 />
//                 <br />
//                 Roll: 
//                 <input 
//                     type="text" 
//                     onChange={(data) => setInput({ ...input, roll: data.target.value })} 
//                 />
//                 <br />
//                 City: 
//                 <input 
//                     type="text" 
//                     onChange={(data) => setInput({ ...input, city: data.target.value })} 
//                 />
//                 <br />
//                 <input type="submit" value="signup" />
//             </form>
//         </>
//     );
// }
