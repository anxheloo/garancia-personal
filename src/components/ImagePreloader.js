import React, { useEffect } from 'react';

const ImagePreloader = ({ imageUrls }) => {
  useEffect(() => {
    const preloadImages = () => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();
  }, [imageUrls]);

  return null;
};

export default ImagePreloader;