import React, {useRef, useState} from 'react'
import '../../styles/pharmacistFolder/pharmacistProfileDashboard.css'
import dommy from "../../assets/pharmacistimage/dommy-image.png";

export const PharmacistProfileDashboard =()=>{
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
    const profileData = {
        name: 'JOHN CIENA',
        role: 'Pharmacist',
        email: 'desyfavour54@gmail.com',
        age: '54',
        pharmacistId: '111222',
        hospitalId: '111222',
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
                            <button onClick={handleCustomButtonClick}>{!imageSrc ? "Upload" : "Change"} Photo</button>
                        </div>
                    </div>
                    <div className= 'pro-pro-text-container'>
                        <h3>{profileData.name}</h3>
                        <div className= 'pro-pro-text'>
                            <span className="label">Role: </span> <span>{profileData.role}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                            <span className="label">Email: </span> <span>{profileData.email}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                            <span className="label">Age: </span><span>{profileData.age}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                            <span className="label">Pharmacist ID:</span> <span>{profileData.pharmacistId}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                            <span className="label">Hospital ID: </span> <span>{profileData.hospitalId}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}