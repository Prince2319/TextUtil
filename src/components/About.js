import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'#042743':'white'
    }

  return (
    <div classNameName="container mx-3 my-5" style = {myStyle}>
        <h1>About Us</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item mx-3 my-2" style = {myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>    
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    TextUtil gives you the way to analyze your text quickly and effeciently .Be it word count ,character count or etc. 
                </div>
                </div>
            </div>
            <div className="accordion-item mx-3 my-2" style = {myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    TextUtil is a free character counter tool that provide instant character count and word count statistics for a given text .It reports the number of word and character .Thus it is suitable for writing text with word /character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item mx-3 my-2" style = {myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    This word counter software work in any web browser such as Google chrome ,Firefox, Internet Explorer ,Safari ,Opera .It suits to count characters in facebook ,blog, books, excel documents ,pdf documents and essay etc. 
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}
