import logo from './images/logo.svg';
import './App.css';

function App() {  // حرف اول کامپوننت باید بزرگ باشه  App
  //بعد داخل کامپوننت یک ریترن داریم
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*  Or <img src="logo.svg" alt="" className="App-logo" />  */}
        {/*<p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
       */}
        <p>New method for images</p>
        
      </header>
    </div>
  );
}

export default App;
