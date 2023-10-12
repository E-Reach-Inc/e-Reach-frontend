import React, { useRef, useState } from 'react';
import axios from 'axios'; // You'll need Axios for making HTTP requests
import "../../styles/components/medicalLogs/medicalLog.css"
// import UploadWidget from "../../cloudinaryConfig/uploadWidget"

function TestEntry() {
    const [testName, setTestName] = useState('');
    const [testResult, setTestResult] = useState(null);
    // const [testDate, setTestDate] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);

    const fileInputRef = useRef(null);

    const handleTestSubmit = () => {
        console.log('Test Entry Submitted:', { testName,  testResult });
    };

    function handleFileChange(event) {
        const file = event.target.files[0];
        setSelectedFile(file);

        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
    }

    async function uploadFile() {
        try {
            const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/e-Reach/upload';
            const uploadPreset = 'cloud_upload_preset';

            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('upload_preset', uploadPreset);

            const response = await axios.post(cloudinaryUrl, formData).then(response=>{

            });

            setImageSrc(response.data.secure_url);
        } catch (error) {
            console.error('Error uploading file to Cloudinary:', error);
        }
    }

    return (
        <div className="Entry-Form-Frame-One">
            <h3>Create Test Entry</h3>
            <input
                type="text"
                placeholder="Test Name"
                value={testName}
                className="inputext"
                onChange={(e) => setTestName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Test Date"
                value={testResult}
                className= "inputext"
                onChange={(e) => setTestResult(e.target.value)}
            />
            <input
                type="text"
                placeholder="Test Report"
                value={testResult}
                className="inputreport"
                onChange={(e) => setTestResult(e.target.value)}
            />
            <div>
                <input
                    // type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    className= "inputext"
                    accept=".jpg, .jpeg, .png, .pdf, .docx"
                />
                <button onClick={() => fileInputRef.current.click()}>Choose File</button>
                {selectedFile && <div>Selected File: {selectedFile.name}</div>}
                {imageSrc && <img src={imageSrc} alt="Uploaded" />}
                {/*<UploadWidget/>*/}
            </div>
            <button id="testFormButton" onClick={handleTestSubmit}>Submit</button>
        </div>
    );
}

export default TestEntry;
