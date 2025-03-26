"use client"
import { useState } from "react";
export default function Form (){

    const [caption,setCaption] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
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
                id="" /></p>
                <div className="buttons">
                <button type="submit">Post</button>
                <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    )
}