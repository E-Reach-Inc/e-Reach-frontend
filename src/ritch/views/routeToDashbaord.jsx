import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

const RouteToDashbaord = () => {
        const params = useParams();
        const navigate = useNavigate()
        useEffect(()=>{
                const PIN = params.PIN;
                localStorage.setItem("patientIdentificationNumber", PIN)
                navigate("/patient-dashboard")
        }, [])

        return (
        <div>routeToDashbaord</div>
        )
}

export default RouteToDashbaord