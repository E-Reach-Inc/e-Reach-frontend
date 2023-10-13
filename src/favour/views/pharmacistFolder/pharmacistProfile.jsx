import React, {useState, useRef, useEffect} from 'react';
import '../../styles/pharmacistFolder/pharmacistProfile.css'
import { PharmacistSideBar } from './pharmacistSideBar';
import {PharmacistSearchBar} from "./pharmacistSearchBar";
import dommy from "../../assets/pharmacistimage/dommy-image.png"
import Axios from "axios";

export const PharmacistProfile =()=>{
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
    const handleCustomButtonClick = () => {
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
        <div className= 'con'>
            <div className= "border-hold">
                <PharmacistSideBar/>
                <div className= 'pro-con'>
                    <PharmacistSearchBar/>
                    <p id= 'pro'>Profile</p>
                    <div className= 'pro-holder'>
                        <div className= "profile-pro-holder">
                            <div className= 'profile-pro-image'>
                                <div className= 'pro-image-doc'>
                                    {imageSrc ? <img src={imageSrc} alt="selected" />:<img src={dommy} alt="selected" />}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{display: 'none'}}
                                        onChange={handleFileChange}
                                        accept=".jpg, .jpeg, .png"
                                    />
                                    <button onClick={uploadImage}>Upload image</button>
                                    <button onClick={handleCustomButtonClick}>{!imageSrc ? "Upload" : "Change"} Photo</button>
                                </div>
                            </div>
                            <div className= 'pro-text-container'>
                                <h3>{firstName}</h3>
                                <div className= 'pro-text'>
                                    <span className="label">Role: </span> <span>{role}</span>
                                </div>
                                <div className= 'pro-text'>
                                    <span className="label">Email: </span> <span>{email}</span>
                                </div>
                                <div className= 'pro-text'>
                                    <span className="label">Phone Number: </span><span>{phoneNumber}</span>
                                </div>
                                <div className= 'pro-text'>
                                    <span className="label">Pharmacist ID:</span> <span>{practitionerIdentificationNumber}</span>
                                </div>
                                {/* <div className= 'pro-text'>
                                    <span className="label">Hospital ID: </span> <span>{profileData.hospitalId}</span>
                                </div> */}
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )

}