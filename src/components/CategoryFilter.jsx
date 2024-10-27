import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CategoryFilter = () => {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSetFilter = () => {
    dispatch({
      type: 'SET_FILTER',
      payload: category,
    });
  };
  const handleDropFilter = () => {
    dispatch({
      type: 'SET_FILTER',
      payload: '',
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Filter Images</h2>
      <div className="flex flex-col gap-2">
        <input
          className="border border-gray-300 p-2 rounded"
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          onClick={handleSetFilter}
        >
          Set Filter
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          onClick={handleDropFilter}
        >
          Drop Filter
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
