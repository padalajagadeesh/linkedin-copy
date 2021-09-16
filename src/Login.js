import React,{useState} from 'react'
import './Login.css';
function Login() {
    const [password,setPassword]= useState( "")
    const [email,setEmail]=useState("")
    const login=(e)=>{
        e.preventDefault();
    }
    const Register=()=>{}
    return (
        <div className="login">
           <img src="https://static.vecteezy.com/system/resources/previews/000/611/672/original/vector-luxury-letter-j-emblem-wings-logo-design-concept-template.jpg" alt=""/>
            
             
          <form>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="user/email"/>
              <input  value={password} onChange={(e)=>setPassword(e.target.value)}    type="password" placeholder="password"/>
        <button onClick={login}>LOGIN</button>
          </form>
            <p>not  a member? 
            <sapn className="login-reg" onClick={Register}>Register Now</sapn>
            </p>
        </div>
    )
}

export default Login
