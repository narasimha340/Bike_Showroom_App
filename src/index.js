// import React from "react";
// import { createRoot } from "react-dom/client";
// import App, { Parent } from "./App";
// import { Data } from "./App";
// import { Props1 } from "./App";
// import { App1 } from "./hooks1";
//  import { Use_effect } from "./hooks2";
//  import { Use_context } from "./hooks2";
// import { Form } from "./Form_validation";
// import Rowter from "./rowter";
// //  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous"></link>
// import App1 from "./App1";

// const root=createRoot(document.getElementById("root"))

// root.render(
//   <React.StrictMode>
//     {/* <Data/><Props1/><App1/> */}
//      {/* <Use_effect/> */}
//      {/* <Use_context/> */}
//       {/* <Form/> */}
//      {/* <Rowter/> */}
//      <App1/>
//   </React.StrictMode>
// )



// import React from "react";
import React from 'react';
// import Login from './login.js';
// import Register from './Register.js';
import { createRoot } from 'react-dom/client';
import Apppath from './Apppath';
const root=createRoot(document.getElementById("root"))





root.render(
     <React.StrictMode>
        
           {/* <Register/> */}
           <Apppath/>
           {/* <Login/> */}
  
     </React.StrictMode>
)