import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.alertMsg("Converted to UpperCase", "success")
    }
    const handleDownClick = () =>{
        let newText1 = text.toLowerCase()
        setText(newText1)
        props.alertMsg("Converted to LowerCase", "success")

    }
    const handle = () =>{
        let newText1 = ('')
        setText(newText1)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleCopy = () =>{
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.alertMsg("Copied The Messsage", "success")

    }
    const [text, setText] = useState('');

    return (
        <>

        <div className='container'  style = {{color : props.mode ==='dark'?'white':'black' }}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control m-3" placeholder={"Enter text here"} value = {text} onChange={handleOnChange} style = {{backgroundColor : props.mode ==='dark'?'#2a2c2d':'white' , color : props.mode ==='dark'?'white':'black' }} id="myBox" rows="10" ></textarea>
            </div>

            <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert To Uppercase</button>
            <button disabled = {text.length ===0} className="btn btn-warning mx-2 my-2" onClick={handleDownClick} >Convert To Lowercase</button>
            <button disabled = {text.length ===0} className="btn btn-danger mx-2 my-2" onClick={handle} >Clear Text</button>
            <button disabled = {text.length ===0} className="btn btn-success mx-2 my-2" onClick={handleCopy} >Copy Text</button>
        </div>

        <div className="container m-3 p-3" style = {{color : props.mode ==='dark'?'white':'black' }}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) =>{return element.length !== 0}).length} average time to read the text</p>

            <h3>Preview</h3>
            <p>{text.length>0 ? text:"Nothing to Preview"}</p>
        </div>
        </> 
    )
}
