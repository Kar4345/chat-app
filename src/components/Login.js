import React, { useEffect, useState } from 'react'
import '../css/Login.css'
const Login = () => {
  const [sname,setSname] = useState("");
  let getData;
  try{
    getData = async () => {
       const info = await fetch('localhost:3050/name');
       const data = await info.json();
       console.log(data)
       return data.name;
     }
   } catch{
     console.log("Impossible to retrieve information!!");
   }
  
  useEffect(()=>{
    const d = getData()
     setSname(d);
     console.log(d)
  },[])
  return (
    <div id='contain'>
      <form>
        <div id='mail'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Email'/>
        </div>
        <div id='pass'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='Password'/>
          {/* <div>{sname}</div> */}
        </div>
        <div id='submit'>
          <button type='submit' id='login'>Log in</button> 
        </div>
      </form>
      <a href='/signup'>Don't have an account?</a>
    </div>
  )
}

export default Login