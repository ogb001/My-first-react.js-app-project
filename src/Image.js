import React from 'react';
import product from './Product';
import './Image.css';
import computerImage from './asset/computer.webp';

const Image = () => {
    const style = {
        width: '100px', // or any desired size
        height: 'auto' // Maintain aspect ratio
      };
    return <img src={computerImage}  alt="computer" style={style} />;
};

export default Image;

