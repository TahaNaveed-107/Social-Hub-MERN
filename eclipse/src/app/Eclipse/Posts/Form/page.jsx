"use client"
import { useState } from "react"

const CreatePost = () => {
    const [caption,setCaption] = useState("")
    const [image,setImage] = useState(null);
    const [preview,setPreview] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        const file = e.target.files[0];
        if (file){
            setImage(file);
            setPreview
        }
    } 

    return (
        <div className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Create a Post</h2>
    
          {error && <p className="text-red-500">{error}</p>}
    
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full p-2 border mb-2"
            />
    
            <input type="file" accept="image/*" onChange={handleImageChange} className="mb-2" />
    
            {preview && <img src={preview} alt="Preview" className="w-full h-40 object-cover mb-2" />}
    
            <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={loading}>
              {loading ? "Uploading..." : "Create Post"}
            </button>
          </form>
        </div>
      );
}
export default CreatePost