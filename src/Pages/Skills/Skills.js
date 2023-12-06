import React from 'react'
import './Skills.css'
function Skills() {
  return (
    <>
      <section id='skills'>
      
        <div className="skill-main">
        <center><h1 id="title">Skills</h1></center>
          <div className='content'>
            
            
            <img src={require('./images/html.png')} className="skill-photo"/>
            <img src={require('./images/css.png')} className="skill-photo"/>
            <img src={require('./images/jscript.png')} className="skill-photo" />
            <img src={require('./images/node.png')} className="skill-photo" />
            <img src={require('./images/pythonn.png')} className="skill-photo" />
            <img src={require('./images/react.png')} className="skill-photo" />
            <img src={require('./images/github..png')} className="skill-photo" />

            
          </div>
        </div>
      </section>
    </>

  )
}

export default Skills
