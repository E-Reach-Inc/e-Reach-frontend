import {useEffect, useRef} from "react";


function UploadWidget() {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary
        console.log(cloudinaryRef.current)
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.CLOUDINARY_API_NAME,
            uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET
        },  function (error, result) {
            if (!error && result && result.event === 'success') {
                return result.info.secure_url;
            }
            else alert(error)
        })
    }, [])

    return (
        <button onClick={() =>widgetRef.current.open()}>
            Upload
        </button>
    )
}
export default UploadWidget
