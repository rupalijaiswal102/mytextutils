import React,{useState} from 'react'
export default function About1(props) {

  let myStyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'#454545':'white',
  border :'2px solid',
  borderColor:props.mode==='dark'?'white':'#042743'
}

return (
  <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className='text-center' style={{marginTop:"90px"}}>About Us</h1>
  <div className="accordion" id="accordionExample">
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    React TextUtils App
    </button>
  </h2>
  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle} >
      <strong>

it is a react app named as Text Utils. It has various functionality to manipulate text

accorning to need of the user. It has both light and dark mode with react router for

easy transition. This is a colleage project.

</strong>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Free to use
    </button>
  </h2>
  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle} >
      <strong>This is free to use for users. </strong> 
       </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compabible
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
    <div className="accordion-body" >
      <strong>This is the Browser Compabible </strong>
    </div>
  </div>
</div>
</div>
</div>
  )
}
