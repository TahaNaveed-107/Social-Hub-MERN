"use client"
import Authenticate from "../../../../../public/components/Authentication/page";
import { useState } from "react";
const Form = ({onClose, onSubmit}) => {

    const [caption,setCaption] = useState("")
    const [file,setFile] = useState(null)
    
    const submitHandler = (e) => {
        e.preventDefault();
            switch (key) {
                case !caption:
                    alert("Caption Required")
                    break;
                case !file:
                    alert
                default:
                    break;
            }
    }

    const changImageHandler = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile){
            setFile(imageFile)
        }
    }

    return (
        // <Authenticate>
        <div>
            <form onSubmit={submitHandler}>
                <p><input 
                type="text" 
                name="caption" 
                id="" 
                value={caption}
                placeholder="Enter Caption" 
                onChange={(e)=>{
                    setCaption(e.target.value)
                }}/></p>
                <p><input 
                type="file" 
                name="image" 
                id=""
                onChange={changImageHandler} 
                /></p>
                <div className="buttons">
                <button type="submit">Post</button>
                <button type="button" onClick={onClose} >Cancel</button>
                </div>
            </form>
        </div>
        // </Authenticate>
    )
}

export default Form;