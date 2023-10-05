import axios from 'axios'
import React from 'react'
import {useParams } from 'react-router'
import { toast } from 'react-toastify'
import "../../styles/auth/activateHospitalAdminAccount.css"

const ActivateHospitalAdminAccount = () => {
        
        const parameter = useParams();
        const wholeToken = parameter.token;
        const token = wholeToken.split("=");
        console.log(token[1]);
        axios.post("http://localhost:8080/api/v1/hospital-admin/activate-account/"+token[1])
             .then(onFulfilled => {
                toast.success(onFulfilled.message, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                localStorage.setItem("adminEmail", onFulfilled.data.adminEmail)
             })
             .catch(onRejected => {
                toast.error(onRejected.message, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
             })
             .finally(()=>{

             })
             
        return (
                <div className="Main-Body">
                        <div className="Activation-Successful-Frame">
                                <div className="Inner-Activation-Successful-Frame">
                                        <h3>Account Activation Successful, Welcome On Board </h3>
                                        <p id="Activation-Successful-Frame-Ptag">
                                                You will receive an email shortly to take you to your dashboard
                                        </p>
                                </div>
                        </div>
                </div>
        )

}

export default ActivateHospitalAdminAccount