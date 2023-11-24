import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        props.showAlert("Success", "Converted To Upper Case")
        console.log("UpperCase Button Clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    
    const handleLowClick = () => {
        props.showAlert("Success", "Converted To Lower Case")
        console.log("LowerCase Button Clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = () => {
        props.showAlert("Success", "Cleared Text")
        console.log("Clear Text Button Clicked")
        let newText = ""
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("Onchange Triggered")
        setText(event.target.value)
    }

    const handleCopy = ()=> {
        props.showAlert("Success", "Copied Text")
        console.log("Text Copied")
        let newText = document.getElementById("myBox")
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }

    const handleSpaces = ()=> {
        props.showAlert("Success", "Extra Spaces Removed")
        console.log("Extra Space Removed")
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    return (
        <>
            <div className='container' style={{color: props.mode === "light"?"white":"black"}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === "dark"?"white":"black", color: props.mode === "light"?"white":"black"}}></textarea>
                </div>

                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{color: props.mode === "light"?"white":"black"}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} charecters</p>
                <p>{0.008 * text.split(" ").length} seconds to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propsType = {
    heading : PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    heading : "Set Heading in App.js"
}