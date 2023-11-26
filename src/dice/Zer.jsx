
import React, { useState } from 'react';
import img1 from './imgs/img1.png';
import img2 from './imgs/img2.png';
import img3 from './imgs/img3.png';
import img4 from './imgs/img4.png';
import img5 from './imgs/img5.png';
import img6 from './imgs/img6.png';
const Zer = () => {
  const [selectedDama1, setSelectedDama1] = useState(1);
  const [selectedDama2, setSelectedDama2] = useState(2);

  const handleDamaClick = (damaNumber) => {
    const randomDama = Math.floor(Math.random() * 6) + 1; 

    if (damaNumber === 1) {
      setSelectedDama1(randomDama);
    } else if (damaNumber === 2) {
      setSelectedDama2(randomDama);
    }
  };

  const selectedDamaSrc = {
    1: [img1, img2, img3, img4, img5, img6],
    2: [img1, img2, img3, img4, img5, img6],
  };

  return (
    <div>
      <img
        src={selectedDamaSrc[1][selectedDama1 - 1]}
        alt={`img${selectedDama1}`}
        onClick={() => handleDamaClick(1)}
      />
      <img
        src={selectedDamaSrc[2][selectedDama2 - 1]}
        alt={`img${selectedDama2}`}
        onClick={() => handleDamaClick(2)}
      />
    </div>
  );
};

export default Zer;
