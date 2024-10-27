import React from 'react';
import { useSelector } from 'react-redux';
import { Options } from './Options';
const ImageGallery = () => {
  const images = useSelector(state => state.gallery.images);
  const filter = useSelector(state => state.gallery.filter);
  const filteredImages = filter
    ? images.filter(image => image.category === filter)
    : images;
  return (
    <div className="w-full flex items-center justify-center flex-col overflow-hidden">
      <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
      <div className="columns-[300px] w-full ">
        {filteredImages.length > 0 ? (
          filteredImages.map(image => {
            return (
              <div
                className='relative'
                onContextMenu={(e) => {
                  e.preventDefault();
                  const options = e.target.closest('.relative').querySelector('.options');
                  options.classList.toggle('hidden');
                }}
              >
                <div className="options hidden absolute top-0 right-0">
                  <Options image={image} />
                </div>
                <div key={image.id} className="p-1 m-2 border rounded-[5px] shadow-md">
                  <img
                    src={image.urls.small}
                    alt={image.alt_description}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              </div>
            )
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">No images available</p>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
