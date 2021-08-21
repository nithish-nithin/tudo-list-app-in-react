import React,{useState} from 'react'

import './App.css';
import Inputarea from './components/Inputarea';
import Tudoitem from './components/Tudoitem';

function App() {
  const [items, setItems] = useState([])
     const addItems=(inputText)=>{
       setItems((previousItem)=>{
        return[...previousItem,inputText]
       })
     };

   return (
    <div className="container">
      <div className='heading'>
        <h1>tudo-list-app</h1>
      </div>
      <Inputarea additems={addItems}/>
      <div>
        <ul>
          {
            items.map((item,index)=>{
              return(
                <Tudoitem key={index} text={items}/>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
