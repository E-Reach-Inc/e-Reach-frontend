import React, {useRef, useState, useEffect} from 'react'
import '../../styles/pharmacistFolder/pharmacistProfileDashboard.css'
import dommy from "../../assets/pharmacistimage/dommy-image.png";

export const PharmacistProfileDashboard =()=>{
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);


    const [pharmacistData, setPharmacistData] = useState({
        name: '',
        role: '',
        email: '',
        age: '',
        pharmacistId: '',
        hospitalId: '',
    });

    useEffect(() => {
        const storedData = localStorage.getItem('pharmacistData');
        if (storedData) {
          setPharmacistData(JSON.parse(storedData));
        }
      }, []);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    useEffect(() => {
        localStorage.setItem('pharmacistData', JSON.stringify(pharmacistData));
      }, [pharmacistData]);

      
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
                        <h3>{pharmacistData.name}</h3>
                        <div className= 'pro-pro-text'>
                            <span className="label">Role: </span> <span>{pharmacistData.role}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                            <span className="label">Email: </span> <span>{pharmacistData.email}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                            <span className="label">Age: </span><span>{pharmacistData.age}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                            <span className="label">Pharmacist ID:</span> <span>{pharmacistData.pharmacistId}</span>
                        </div>
                        <div className= 'pro-pro-text'>
                            <span className="label">Hospital ID: </span> <span>{pharmacistData.hospitalId}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}