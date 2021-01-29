import logo from './logo.svg';
import './App.css';

const flag = false;
const count = 32;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <section style={{
          fontSize: 50
        }}>
          <h3>Hello mentor!</h3>
          <p>{count}</p>
          <p>{45}</p>
          <p>{2 + 4}</p>
          <p>{flag && 'Flag is true'}</p>
          <p>{flag ? 'Flag is true' : 'Flag is false'}</p>
          {undefined}
          {null}
          {false}
          {true}
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
