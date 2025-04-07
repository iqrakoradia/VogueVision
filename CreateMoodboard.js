// CreateMoodboard.js
import React, { useState } from 'react';

const CreateMoodboard = () => {
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages([...images, ...files]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create a Moodboard</h1>
            <input 
                type="text" 
                placeholder="Moodboard Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full p-2 border rounded mb-4"
            />
            <input 
                type="file" 
                multiple 
                onChange={handleImageUpload}
                className="block w-full p-2 border rounded mb-4"
            />
            <div className="flex flex-wrap gap-2">
                {images.map((image, index) => (
                    <img key={index} src={URL.createObjectURL(image)} alt="preview" className="w-24 h-24 object-cover rounded" />
                ))}
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4">Save Moodboard</button>
        </div>
    );
};

export default CreateMoodboard;