import { useState } from 'react';
import './App.css';

function App() {  

   //without state we use a variable that has probles
   // let name ='Asadi' //default name
   const [name,setName] = useState("mahdi")

  const handleClick =()=>{
       //name='Rect App';
      setName("Redux")
      console.log(name);//اینجا مشکل داره  که بعدا مشکل حل می کنیم
  }
   //مشکل متغیر این هست که این قابلیت نداره که به کامپوننت بگه دوباره رندر شود
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <button onClick={handleClick}>Click</button>
      </header>
    </div>
  );
}

export default App;
