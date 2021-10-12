import React from 'react'
import { useState } from 'react';

const SubmitOtp = () => {
    const[ErrorText,setErrorText]=useState("");
    const[Otp,setOtp]=useState("")
    const submitOtpfrom =(e)=>{
        e.priventDefault();
        setErrorText("")
        if(!Otp){
            setErrorText("Otp is required")
            return
        }

    }
    return (
        <div className="Otp-section">
            <form onSubmit={submitOtpfrom}>
            <div className="form-feild">
                <label>OTP</label>
                <p>
                <input type="number"
                        placeholder="enter Otp"
                        value={Otp}
                        onChange={e =>{setOtp(e.target.value)}}
                    />
                </p>
            </div>
           <button type ="submit">Veryfy otp</button>
        </form>
        <div className="form-error-text">{ErrorText}</div>
        </div>
    )
}

export default SubmitOtp
