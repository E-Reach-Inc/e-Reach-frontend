import {useEffect, useRef} from "react";
import { toast } from "react-toastify";

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
            else toast.error(error, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
        })
    }, [])

    return (
        <button onClick={() =>widgetRef.current.open()}>
            Upload
        </button>
    )
}
export default UploadWidget
