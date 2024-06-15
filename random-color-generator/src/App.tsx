import { useEffect, useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#ffffff');

  const randomNumber = (count) => {
    const random = Math.floor(Math.random() * count);
    return random;
  };

  const handleTypeOfColor = (type) => {
    if (type === 'hex') {
      setTypeOfColor('hex');
    } else if (type === 'rgb') {
      setTypeOfColor('rgb');
    }
  };

  const handleRandomHEXColor = () => {
    let hexColor = '#';
    const hex = '123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * (hex.length - 1));
      hexColor += hex[randomIndex];
    }
    setColor(hexColor);
  };

  const handleRandomRGBColor = () => {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    setColor(rgb);
  };

  useEffect(() => {
    if (typeOfColor === 'rgb') handleRandomRGBColor();
    else handleRandomHEXColor();
  }, [typeOfColor]);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: color }}>
      <div className={styles.buttons}>
        <button onClick={() => handleTypeOfColor('hex')}>
          Create HEX Color
        </button>
        <button onClick={() => handleTypeOfColor('rgb')}>
          Create RGB Color
        </button>
        <button
          onClick={
            typeOfColor === 'hex' ? handleRandomHEXColor : handleRandomRGBColor
          }
        >
          Create Random Color
        </button>
      </div>
      <h1 className={styles.color__type}>
        {typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}
      </h1>
      <p>{color}</p>
    </div>
  );
};

export default App;
