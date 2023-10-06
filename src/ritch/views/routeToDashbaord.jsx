import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

const RouteToDashbaord = () => {
        const params = useParams();
        const navigate = useNavigate()
        useEffect(()=>{
                const PIN = params.PIN;
                console.log(PIN)
                localStorage.setItem("patientIdentificationNumber", PIN)
                navigate("/patient-dashboard")
        }, [])

        function handleClick(){
                navigate("/patient-dashboard")
        }

        return (
                <div>
                        <button onClick={handleClick}>Go to your dashboard</button>
                </div>
        )
}

export default RouteToDashbaord