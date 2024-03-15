import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {data} from './Const'


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

     if(amount<0) amount = 1;
     if(amount > 10) alert("What will you do of such paras, So give less input");
     setText(data.slice(0,amount));
  }

  return (
    <div className="App">
      <h3>Tired of Lorem Ipsum?</h3>

      <form className='lorem-form' onSubmit={handleSubmit}>
        <label>Paragraph:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)}></input>
        <button className='btn'>Generate</button> 
        </form>  

        <div>
          {text.map((data , index) => (
            <p key = {index}> {data} </p>
          ))}
        </div>  
    </div>
  );
}

export default App;
