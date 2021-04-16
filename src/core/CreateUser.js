import React ,{useState}from 'react'
import "../styles/form.css"
import HomeNavbar from './HomeNavbar'
const CreateUser=()=> {
    const [name, setname] = useState("")
    const [password, setpassword] = useState('')
    const handleSubmit=()=>{
        alert("Woohooo")   

    }
    const handleName=(e)=>{
        setname(e.target.value)
    }
    const handlePassword=(e)=>{
        setpassword(e.target.value)
    }
    return (
        <div>
            <HomeNavbar />
        <div className="page">
            
            <form className="form form-group">
                    <h1>Create User</h1><br></br><br></br>
                    <label>Name</label>
                    <input className="form-control" type="text" placeholder="Enter your name" onChange={handleName}></input><br></br>
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Enter your password" onChange={handlePassword}></input>
                    <br></br>
                    <button onClick={handleSubmit} className="btn btn-primary" >Submit</button>
                
            </form>
        </div>
        </div>
    )
}

export default CreateUser
