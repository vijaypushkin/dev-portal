import { useState } from 'react';
import DevPortalReact from '@push-stack/dev-portal/react';
import styles from './app.module.scss';

export function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const handleGenerateRandomNumber = () => {
    setRandomNumber((Math.random() * 100) | 0);
  };

  return (
    <main className={styles.root}>
      <div className={styles.item}>
        <h1 className={styles.title}>String</h1>
        <div className={styles.content}>
          <button onClick={handleGenerateRandomNumber}>
            Generate Random Number
          </button>
          <div>{randomNumber}</div>
        </div>
      </div>
      <DevPortalReact />
    </main>
  );
}

export default App;
