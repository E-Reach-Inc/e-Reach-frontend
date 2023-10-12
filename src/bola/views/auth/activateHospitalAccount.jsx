import "../../styles/auth/activateHospitalAccount.css"
import axios from 'axios'
import React, { useEffect } from 'react'
import {useParams } from 'react-router'
import { toast } from 'react-toastify'

const ActivateHospitalAccount = () => {

        const parameter = useParams();
        const wholeToken = parameter.token;
        const token = wholeToken.split("=");
        console.log(token[1]);
        useEffect(()=>{
                console.log("hello world hello")
                axios.post("https://e-reach-prod.up.railway.app/api/v1/hospital/activate-account/"+token[1])
                .then(onfulfilled => {
                        console.log(onfulfilled)
                        console.log(onfulfilled.data.data)
                        toast.success(onfulfilled.message, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                        localStorage.setItem("hospitalEmail", onfulfilled.data.data.hospitalEmail)
                })
                .catch(onRejected => {
                   toast.error(onRejected.message, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                })
                .finally(()=>{
   
                })
        }, [])
       
             const styles = {

             }
        return (
                <div className="Main-Body">
                        <div className="Activation-Successful-Frame" style={styles}>
                                <div className="Inner-Activation-Successful-Frame">
                                        <h3>Account Activation Successful </h3>
                                        <p id="Activation-Successful-Frame-Ptag">You will receive an email shortly to activate your own personal account as the 
                                        hospital admin, click the activate button to your own the account.</p>
                                </div>
                        </div>
                </div>
        )
}

export default ActivateHospitalAccount