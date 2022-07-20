import React, {useState} from 'react'



export default function TextForm(props) {
    document.title= "TextUtils-Home";
    const [text, setText]=useState('')
    let handelOnchange= (event)=>{
        // console.log("handel on change");
        setText(event.target.value);
    }
    let handleUpCase= ()=>{
        // console.log("handel on upper case");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase!!","success")
    }
    let handleLoCase= ()=>{
        // console.log("handel on upper case");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase!!","success")
    }
    let handleClear= ()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared successfully!!","success")
    }
    let extractEmail= ()=>{
        let newText=text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        // console.log(newText)
        if (newText!==null) {
            setText(newText.join(', '));
            props.showAlert("Email extracted!!","success")
        }
        props.showAlert("No Email found!!","warning")
    }
    
    let handelCopy=()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success")
        /* Alert the copied text */
        // alert("Copied the text: " + text);
      }
    
    
    function wordCount(text){
        let a=text.split(" ")
        let l=a.length;
            if (a[a.length-1]==="") {
                l=(a.length)-1
            }
            return l;
    }

  return (
    <>
    <div>
        <div className="container" style={{color: props.mode.clr==='dark'?'white':'black'}}>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundcolour: props.mode.clr==='dark'? '#140e26': 'white'}} value={text} onChange={handelOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode.clr==='light'?'primary':'dark'} my-2 mx-1`} onClick={handleUpCase}>Convert to uppercase</button>
        <button className={`btn btn-${props.mode.clr==='light'?'primary':'dark'} my-2 mx-1`} onClick={handleLoCase}>Convert to lowercase</button>
        <button className={`btn btn-${props.mode.clr==='light'?'primary':'dark'} my-2 mx-1`} onClick={extractEmail}>Extract Email</button>
        <button className={`btn btn-${props.mode.clr==='light'?'primary':'dark'} my-2 mx-1`} onClick={handelCopy}>Copy</button>
        <button className={`btn btn-${props.mode.clr==='light'?'primary':'dark'} my-2 mx-1`} onClick={handleClear}>Clear</button>
        </div>
        <div className="container" style={{color: props.mode.clr==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{wordCount(text)} word and {text.length} character</p>
            <p>It takes {(0.008*wordCount(text)).toFixed(3)} minutes to read.</p>
            <h2 className="text-wrap">Your Text Preivew</h2>
            <p>{text.length>0?text:'Enter some text above to show preivew.'}</p>
        </div>
    </div>
    </>
  )
}
