import React from 'react';

function Image({ src }) {
  let imgStyles = {
    width: '100%',
    height: '100%',
  };
  return <img src={src} alt="slide-imag" style={imgStyles}></img>;
}

export default Image;
