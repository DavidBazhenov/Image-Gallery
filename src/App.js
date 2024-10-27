import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageUploader from './components/ImageUploader';
import ImageGallery from './components/ImageGallery';
import { fetchImages } from './redux/reducers/galleryReducer';
import CategoryFilter from './components/CategoryFilter';
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div className="main w-full bg-bg min-h-screen h-full text-primary">
      <div className='fixed z-10'>
        <button className="mt-5 absolute z-10 top-0 left-8 p-2 rounded hover:bg-primary hover:text-bg focus:outline-none" onClick={toggleVisibility}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <div
          className={`absolute top-0 left-0 transition-all duration-500 h-screen bg-gradient-to-l from-transparent px-8 backdrop-blur-sm to-[#C6CDD7]/30 p-6 rounded-lg text-white ${isVisible ? 'appear' : 'disappear'}`}
        >
          <h1 className="text-3xl font-bold mb-6 pt-16">Redux Image Gallery</h1>
          <ImageUploader />
          <CategoryFilter />
        </div>
      </div>
      <div className="container mx-auto bg-bg">
        <div className="pt-10 flex items-center justify-center">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default App;
