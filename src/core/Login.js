import React ,{useContext, useEffect, useState,}from 'react'

import "../styles/form.css"
import Axios from "axios";
import HomeNavbar from './HomeNavbar'
import { authToken } from '../helper/helperList';
import {isLoggedin} from '../helper/helperFunctions'
import { Redirect } from 'react-router';

const Login=()=> {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [redirect, setredirect] = useState(false)


    
    const handleLogin=async (e)=>{
        e.preventDefault()
        Axios({
            method:'post',
            url:'https://pacific-crag-23437.herokuapp.com/api/login',
            data:{
                name:email,
                password:password  
            }
    }).then(response=>{
            if(response.data.error)
            return  alert(response.data.error)
            localStorage.setItem("token",JSON.stringify(response.data.token))
            setredirect(true);
        })
        .catch(err=>{
            console.log(err);
        })
        


   }

   const handleEmail=(e)=>{
       setemail(e.target.value)

   }
   const handlePassword=(e)=>{
        setpassword(e.target.value)
   }

   if(redirect){
      return <Redirect to="/" />
   }
    return (
        <div>
            <HomeNavbar />
        <div className="page">
            
            <form className="form form-group">
                    <h1>Login</h1><br></br><br></br>
                    <label>Name</label>
                    <input className="form-control" type="text" placeholder="Enter your name here" onChange={handleEmail}></input><br></br>
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Enter your password here" onChange={handlePassword}></input>
                    <br></br>
                    <button onClick={handleLogin} className="btn btn-primary" >Submit</button>
                
            </form>
        </div>
        </div>
    )
}

export default Login
