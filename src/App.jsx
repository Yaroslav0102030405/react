import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// import paintingsData from './paintings.json';
import Painting from './assets/components/Painting/Painting';
import Details from './assets/Details';
import Panel from './assets/Panel';
import ColorPicker from './assets/components/ColorPicker/ColorPicker';
import Layout from './assets/components/layout/Layout';

const title = 'Першій досвід';

const colorPickerOptions = [
  { label: 'red', color: '#DE3163' },
  { label: 'blue', color: '#6495ED' },
  { label: 'green', color: '#9FE2BF' },
  { label: 'yellow', color: '#DFFF00' },
];

const styles = {
  container: { width: '1200px', marginleft: 'auto', marginright: 'auto' },
};

const number = [1, 2, 3, 4, 5];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <div style={styles.container}>
          <ColorPicker options={colorPickerOptions} />
          <Panel title="Хорошие новости">
            <p>Привет</p>
          </Panel>
          <Panel>
            <p>Пока</p>
            <p>fdfdfdfdfdfdfdf</p>
          </Panel>
          <ul>
            {number.map((num) => (
              <li key={num}>
                <h2>{num}</h2>
              </li>
            ))}
          </ul>

          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>

          <Painting />
          <Details title={title} />
        </div>
      </Layout>
    </>
  );
}

export default App;
