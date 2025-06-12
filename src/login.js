//   form validation 

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Login() {

    
    const[email,setEmail]=useState()
    const[pswd,setPswd]=useState()
    

    

    const cahngeEmail=(e)=>{
        setEmail(e.target.value)
    }


    const chnagePswd=(p)=>{
        setPswd(p.target.value)
    }


     const navigate=useNavigate()
    


const firebaseConfig = {
  apiKey: "AIzaSyBcKdJ-5sMkBskab-_GWkAawY8jWy6orQ4",
  authDomain: "myproject-89b23.firebaseapp.com",
  projectId: "myproject-89b23",
  storageBucket: "myproject-89b23.firebasestorage.app",
  messagingSenderId: "936704217151",
  appId: "1:936704217151:web:eb5f152f04da93c546288a",
  measurementId: "G-QPPJYWMGWF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

   const auth=getAuth()

        const formValidation=(e)=>{
            e.preventDefault()

              
               


                let obj={
                    usename:email,
                    password:pswd
                }

                signInWithEmailAndPassword(auth,obj.usename,obj.password)
                .then(()=>{
                    alert("logged in  successfully")
                    navigate('/Appbike')
                }).catch(()=>{
                    alert("error")
                })

             
        }




    return (
        <div>
            <div className="container p-2" style={{width:"400px"}}>
                <div className="card">
                    <div className="card-head text-center" >
                        <h1> Login Form </h1>

                    </div>
                    <div className="card-body">
                        <form onSubmit={formValidation}>
                        
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" value={email} onChange={cahngeEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:"210px"}} placeholder="Enter Your Email"/>
                                    
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" value={pswd} onChange={chnagePswd} class="form-control" id="exampleInputPassword1" style={{width:"210px"}} placeholder="Enter Your Password"/>
                            </div>
                           
                            
                            <button type="submit" class="btn btn-primary" style={{marginLeft:"140px"}}>Login</button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Login;