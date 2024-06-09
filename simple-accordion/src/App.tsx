import { useState } from 'react';
import styles from './App.module.css';

const data = [
  {
    id: 0,
    question: 'What is Webflow and why is it the best website builder?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
  {
    id: 1,
    question: 'What is Webflow and why is it the best website builder?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
  {
    id: 2,
    question: 'What is Webflow and why is it the best website builder?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
  {
    id: 3,
    question: 'What is Webflow and why is it the best website builder?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
];
const App = () => {
  const [selected, setSelected] = useState(0);
  const handleClick = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <div className={styles.accordion}>
      {data && data.length
        ? data.map((dataItem) => (
            <div
              key={dataItem.id}
              className={` ${styles.accordion__item} ${
                selected === dataItem.id
                  ? styles['accordion__item-border']
                  : null
              }`}
            >
              <h2
                onClick={() => handleClick(dataItem.id)}
                className={styles.accordion__question}
              >
                {dataItem.question}
                <span
                  className={`${
                    selected === dataItem.id
                      ? styles.button
                      : styles['button-white']
                  }`}
                >
                  <img
                    src={
                      selected === dataItem.id ? 'arrow.png' : 'arrow-right.png'
                    }
                    alt="Arrow Down"
                  />
                </span>
              </h2>
              <p
                className={`${styles.accordion__answer} ${
                  selected === dataItem.id
                    ? styles['accordion__answer--margin']
                    : null
                }`}
              >
                {selected === dataItem.id ? dataItem.answer : null}
              </p>
            </div>
          ))
        : null}
    </div>
  );
};

export default App;
