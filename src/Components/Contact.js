import React from 'react'
export default function Contact(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'#454545':'white',
        
        borderColor:props.mode==='dark'?'white':'#042743'
      }
    return (<div className='container text-center' style={myStyle}>
     <h2 style={{marginTop:"90px"}} >Contact Me</h2>
    <b> <p>Created by: Rupali Jaiswal </p>
     <p>Email Address: rupalijaiswal505@gmail.com
     </p> </b></div>)
}
