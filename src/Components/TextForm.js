import React, {useState} from 'react'

export default function TextForm(props) {
    const handleClick=()=>{
        let newtext=text.toUpperCase();
      setText(newtext)
      props.showAlert("Converted to UpperCase","success")
    }
    const handleClick2=()=>{
   let newtext=text.toLowerCase();
       setText(newtext)
       props.showAlert("Converted to Lower Case","success")
     }
     const handleClick3=()=>{
  let newtext='';
       setText(newtext)
       props.showAlert("Remove text","success")
     }
     const handleCopy=()=>{

     navigator.clipboard.writeText(text);
     document.getSelection().removeAllRanges();
     props.showAlert("Copy to Clipboard","success")
   }
   const handleExtraSpace=()=>{
     let newtext=text.split(/[ ]+/);
   setText(newtext.join(" "))
   props.showAlert("Remove Extra Spaces","success")
 }
    const handleChange=(event)=>{
        setText(event.target.value)

       }
    const[text,setText]=useState('');
   
  return (
    <>
    <div className='container' 
    style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1 style={{marginTop:"90px"}} className='text-center'>{props.heading}</h1>
    <i class="bi bi-battery-full"></i>
<div className="mb-3">
  <textarea className="form-control" id="myBox" 
  style={{backgroundColor:props.mode==='dark'?'#454545':'white' ,color:props.mode==='dark'?'white':'#042743'}} 
  value={text} onChange={handleChange} rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClick}>Convert Upper Case</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClick2}>Convert Lower Case</button>
<button disabled={text.length===0} className='btn btn-danger mx-2 my-1' onClick={handleClick3}>Clear Text</button>
 <button disabled={text.length===0} className='btn btn-success mx-2 my-1'onClick={handleCopy} >Copy Text</button>
 <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'onClick={handleExtraSpace} >Remove Extra Spaces</button>

    </div>

    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>Number of words: {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} 
         </p><p>Number of Characters: {text.length}</p> 
      <p>Reading Time: {0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} </p>
      <h2 className='text-center'>Preview Document</h2>
<textarea className="form-control" id="myBox" 
style={{backgroundColor:props.mode==='dark'?'#454545':'white' ,color:props.mode==='dark'?'white':'#042743'}} 
  value={text .length>0?text:"Nothing to preview"}></textarea>
    </div>
    </>
  )
}