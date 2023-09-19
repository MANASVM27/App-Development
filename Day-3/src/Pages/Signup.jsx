import { useState } from 'react';
import '../Assets/css/Signup.css';

function Signup() {
  const validateSignupData = (e) => {
    e.preventDefault()
    if(username==="")
      setUnerror("[Username cannot be empty]")
    else
      setUnerror("");
    
    if(mail==="")
    setMailerror("[Email cannot be empty]")
    else if(!/\S+@\S+\.\S+/.test(mail))
    setMailerror("[Email is invalid]")
    else
      setMailerror("");

    if(password==="")
      setPwerror("[Password cannot be empty]")
    else if(password.length < 8)
      setPwerror("[Your password is less than 8 characters]")
    else if(!(password===confirmpw))
      setPwerror("[Your passwords do not match]")
    else
      setPwerror("");

    if(confirmpw==="")
      setCpwerror("[Confirm password cannot be empty]")
    else
      setCpwerror("");
  };

  const[username,setUsername]=useState("");
  const[unerror,setUnerror]=useState("");

  const[mail,setMail]=useState("");
  const[mailerror,setMailerror]=useState("");

  const[password,setPassword]=useState("");
  const[pwerror,setPwerror]=useState("");
  
  const[confirmpw,setConfirmpw]=useState("");
  const[cpwerror,setCpwerror]=useState("");

  return (
    <>
      <div className='signup-page'>
          <div className='signup-box'>

            <div className='signup-div'>
              <span className='signup-text'><b>Sign up</b></span>
            </div>

            <form onSubmit={validateSignupData}>

            <div className='username-div'>
              <span className='username-text'>Username</span>
              <input className='username-in' type='text' placeholder='Username'
              onChange={(e)=>setUsername(e.target.value)}></input>
              {unerror && <span className='unerror-text'><b>{unerror}</b></span>}
            </div>

            <div className='mail2-div'>
              <span className='mail2-text'>Email</span>
              <input className='mail2-in' type='email' placeholder='Email'
              onChange={(e)=>setMail(e.target.value)}></input>
              {mailerror && <span className='mailerror-text'><b>{mailerror}</b></span>}
            </div>

            <div className='pw2-div'>

              <span className='pw2-text1'>Password</span>
              <input className='pw2-in1' type='password' placeholder='Password' 
              onChange={(e)=>setPassword(e.target.value)}></input>
              {pwerror && <span className='pwerror-text'><b>{pwerror}</b></span>}

              <span className='pw2-text2'>Confirm Password</span>
              <input className='pw2-in2' type='password' placeholder='Confirm Password' 
              onChange={(e)=>setConfirmpw(e.target.value)}></input>
              {cpwerror && <span className='cpwerror-text'><b>{cpwerror}</b></span>}
            </div>

            <div className='signupbtn-div'>
              <button className='signup-btn'>Sign up</button>
            </div>

                </form>
          </div>
      </div>
    </>
  );
}

export default Signup;