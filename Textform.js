import React,{useState} from 'react'
export default function Textform(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    
    setText(newText);
  }
  const handleLoClick=()=>{
    // console.log("uppercase was clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    // console.log("onchange");
    setText(event.target.value);
  }
  const[text,setText]=useState("Enter text here");
  // text="new text"; it is a wrong way to update the text
  // setText=("enter here");
    return (
      <>
      <div className=" container my-3">
          <h2>{props.heading}</h2>
 <div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
  <button type="button" className="btn btn-primary mx-1x" onClick={handleUpClick}>Convert to uppercase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
</div>
<div className="container my-2">
  <h3>Your text summary.</h3>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minute read</p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
</>
    )
}
