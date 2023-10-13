import React, {useRef, useState, useEffect} from 'react'
import '../../styles/pharmacistFolder/pharmacistProfileDashboard.css'
import dommy from "../../assets/pharmacistimage/dommy-image.png";
import Axios from "axios";


export const PharmacistProfileDashboard =({props})=>{
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);
    const [profileData, setProfileData] = useState(null)



    const data = JSON.parse(localStorage.getItem("practitionerDa"))    
        const {firstName, lastName, email, practitionerIdentificationNumber, role, phoneNumber} = data
        console.log("message --> ", firstName) 

        console.log(profileData)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const uploadImage = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('multipartFile', selectedFile);

            Axios.post('/api/v1/upload-profile/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((response) => {
                    console.log('Image upload successful:', response.data);
                })
                .catch((error) => {
                    console.error('Error uploading image:', error);
                });
        }
    };

      
    return(
        <div>
            <div className= 'pro-hold'>
                <div className= "pro-pro-holder">
                    <div className= 'pro-pro-image'>
                        <div className= 'pro-pro-image-doc'>
                            {imageSrc ? <img src={imageSrc} alt="selected" />:<img src={dommy} alt="selected" />}
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{display: 'none'}}
                                onChange={handleFileChange}
                                accept=".jpg, .jepeg, .png"
                            />
                            <button onClick={handleImageClick}>{!imageSrc ? "Upload" : "Change"} Photo</button>
                        </div>
                    </div>
                    <div className= 'pro-pro-text-container'>
                    <h3>{firstName}</h3>
                        <div className= 'pro-pro-text'>
                        <span className="label">Role: </span> <span>{role}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                        <span className="label">Email: </span> <span>{email}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                        <span className="label">Phone Number: </span><span>{phoneNumber}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                        <span className="label">Pharmacist ID:</span> <span>{practitionerIdentificationNumber}</span>
                        </div>
                        {/* <div className= 'pro-pro-text'>
                            <span className="label">Hospital ID: </span> <span>{pharmacistData.hospitalId}</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}