//   form validation 

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import {Link,useNavigate } from "react-router-dom";
import './Appbike.css';



function Register() {

    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[pswd,setPswd]=useState()
    const[cpswd,setCpswd]=useState()

    const changename=(e)=>{
        setName(e.target.value)
       
    }

    const cahngeEmail=(e)=>{
        setEmail(e.target.value)
    }


    const chnagePswd=(p)=>{
        setPswd(p.target.value)
    }

    const changeCpswd=(c)=>{
        setCpswd(c.target.value)
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

              if(name.length<=5){
                alert("Name should be greater then 5 letters ")
              }else if(pswd!=cpswd){
                alert("password and confirm password not matched ")
              }else{
               


                let obj={
                    usename:email,
                    password:pswd
                }

                createUserWithEmailAndPassword(auth,obj.usename,obj.password)
                .then(()=>{
                    alert("registered successfully")
                    navigate('/login')
                }).catch(()=>{
                    alert("error")
                })

              }
        }
      
        //to goto login page
        



    return (
        <div>
            <div className="container p-2" style={{width:"400px"}}>
                <div className="card">
                    <div className="card-head text-center" >
                        <h1> Registration Form </h1>

                    </div>
                    <div className="card-body">
                        <form onSubmit={formValidation}>
                        <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" value={name} onChange={changename} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:"210px"}} placeholder="Enter Your Name"/>
                                    
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" value={email} onChange={cahngeEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:"210px"}} placeholder="Enter Your Email"/>
                                    
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" value={pswd} onChange={chnagePswd} class="form-control" id="exampleInputPassword1" style={{width:"210px"}} placeholder="Password"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
                                <input type="password" value={cpswd} onChange={changeCpswd} class="form-control" id="exampleInputPassword2" style={{width:"210px"}} placeholder="Conform Password"/>
                            </div>
                            
                            <div id="button1">
                                <button type="submit" class="btn btn-primary" style={{textAlign:"center",marginLeft:"60px"}}>Register</button>
                                <Link to={"/login"}><button className="btn">login</button></Link>
                            </div>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Register;