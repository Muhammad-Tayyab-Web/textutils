import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        //   console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClick")
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handlelowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    
    const handleCopyClick = ()=>{
        //let newText = text.select();
         navigator.clipboard.writeText(text);
        // alert("The text is coppied!")
         props.showAlert("Text Coppied","success");

      //  setText(newText)
    }
    
    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText = ("New Text"); //Correct way to change the state


    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'Black':'white'  , color:props.mode==='dark'?'white':'#042743'}} id="MyBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy to Clipboard</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").filter(word => word.trim() !== "").length} words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter(word => word.trim() !== "").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview."}</p>
            </div>
        </>
    )
}
