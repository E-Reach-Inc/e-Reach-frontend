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
    const profileData = {
        name: 'JOHN CENA',
        role: 'Pharmacist',
        email: 'desyfavour54@gmail.com',
        age: '54',
        pharmacistId: '111222',
        hospitalId: '111222',
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
                                <h3>{profileData.name}</h3>
                                <div className= 'pro-text'>
                                    <span className="label">Role: </span> <span>{profileData.role}</span>
                                </div>
                                <div className= 'pro-text'>
                                    <span className="label">Email: </span> <span>{profileData.email}</span>
                                </div>
                                <div className= 'pro-text'>
                                    <span className="label">Age: </span><span>{profileData.age}</span>
                                </div>
                                <div className= 'pro-text'>
                                    <span className="label">Pharmacist ID:</span> <span>{profileData.pharmacistId}</span>
                                </div>
                                <div className= 'pro-text'>
                                    <span className="label">Hospital ID: </span> <span>{profileData.hospitalId}</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )

}