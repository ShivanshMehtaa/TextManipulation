import React from "react";

export default function About(props) {

    // const [myStyle, setmyStyle] = useState(  
    // {
    //     color: "white",
    //     backgroundColor : "black",
    //     border: "2px solid white"
    // });

    let myStyle = {
      color: props.mode ==='dark'? 'white': 'black',
      backgroundColor : props.mode === 'dark' ? '#2a2c2d' : 'white'
    }

    

    
  return (
   
    <div className="container" style = {myStyle}>
        <h1 className="m-3">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style = {myStyle}
            >
              <strong>Analyze Your Text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
             TextUtils gives you a way to analyze your text quickly and efficiently. Be it WordCount, CharacterCount, Length of your Text or you just want to see the preview
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style = {myStyle}
            >
              <strong>Free To Use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              TextUtils is a free characterCounter Tool that provides instant character count and word count statistics for a gicen text. TextUtils reports the number of words and characters. Thus it is suitable for waiting text with word/ character limit
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style = {myStyle}
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              This word counter software works in any web browser such as chrome, firefox, safari, etc. It suits to count the number of characters/ words in any long piece of document
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
