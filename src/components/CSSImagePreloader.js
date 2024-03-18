import React, { useEffect } from 'react';

const CSSImagePreloader = ({ url }) => {
  useEffect(() => {
    const image = new Image();
    image.src = url;
  }, [url]);

  return null;
};

export default CSSImagePreloader;