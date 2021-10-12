import React from 'react'
import { useState } from 'react';
import SubmitOtp from './SubmitOtp';
const ForgotPassword = ({setFogotPasswordScreenvisiblity})=>{
    
    const[email,setEmail] = useState("");
    // const[otp,setotp] = useState("");
    const[errorText,setErrorText] = useState("");
    const[OtpScreenvisibility,setOtpScreenvisibility] = useState(false);
    const submitForgotpasswordForm = (e)=>{
        e.preventDefault(); 
        setErrorText("");
        if(!email){
            setErrorText("Email is required");
            return;
        }
    }
    return(
        
        <div className ="forgotpassword-section">
            <h1>Forgot Password</h1>
            <form onSubmit={submitForgotpasswordForm}>
                <div className="form-feild">
                    <label>Email</label>
                    <p>
                    <input type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e =>{setEmail(e.target.value)}}
                    />
                   </p>
                </div>

                <button type="submit"onClick={()=>{email&&
                setOtpScreenvisibility(true)}}>Send Otp</button>
                <div className="form-error-text">{errorText}</div>
                
                
            </form>
            {OtpScreenvisibility ? <SubmitOtp />:""}
            
            <div onClick={()=>{setFogotPasswordScreenvisiblity(false)}}>Close</div>
        </div>
    )
}

export default ForgotPassword;
