import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!" , 'success');
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!" , 'success');
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!" , 'success');
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!" , 'success');
    }

    const handleExtraSpaces = () =>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces Cleared!" , 'success');
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className = "container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
            <h1> {props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange}  style={{backgroundColor: props.mode === 'dark' ? 'grey':'white' , color: props.mode === 'dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick = {handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick = {handleLoClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick = {handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-3" onClick = {handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-3" onClick = {handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
            <h2>Your Summary</h2>
            <p> {text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Write in text box to preview here"}</p>
        </div>
        </>
    )
}
