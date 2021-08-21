 import React,{useState} from 'react'
 
 const Inputarea = (props) => {
     const [inputText, setInputText] = useState("")
     const handlechanger=(event)=>{
            setInputText(event.target.value)
     }
     return (
         <div className='form'>
            <input type='text' onChange={handlechanger} value={inputText}/>
            <button onClick={()=>{
                props.additems(inputText);
                setInputText("");
            }}>
                <span>Add</span>
                </button> 
         </div>
     )
 }
 
 export default Inputarea
 