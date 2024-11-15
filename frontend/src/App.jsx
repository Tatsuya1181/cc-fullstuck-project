import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [count, setCount] = useState(0);

  // 接続確認
  const [fields, setFields] = useState([]);
  useEffect(() => {
    try {
      const fetchFields = async () => {
        const res = await axios.get(`${baseUrl}/field`);
        setFields(res.data);
        // console.log(res.data);
      };
      fetchFields();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
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
    </>
  );
}

export default App;
