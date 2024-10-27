import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ImageUploader = () => {
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleAddImage = () => {
    if (url && category) {
      dispatch({
        type: 'ADD_IMAGE',
        payload: {category: category, alt_description: category, urls: { small: url } }, category,
      });
      setUrl('');
      setCategory('');
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Add Image</h2>
      <div className="flex flex-col gap-2">
        <input
          className="border border-gray-300 p-2 rounded-[10px] text-secondary placeholder:text-secondary "
          type="text"
          placeholder="Image URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <input
          className="border border-gray-300 p-2 rounded-[10px]  text-secondary placeholder:text-secondary "
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleAddImage}
        >
          Add Image
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
