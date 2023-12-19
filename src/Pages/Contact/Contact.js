import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <>
            <section id='contact'>
               


                    <div className="Contact-main">
                        <div className='content'>


                            <div className="title">
                                <h1>Contact</h1>

                                <div className="main">
                                <a href="https://www.linkedin.com/in/muktarul-hoque-45b04b208/" target="_blank">
                                    <img className="contacts-img" src={require("./linkedinn.png")}/>
                                    </a>
                                    <a href="https://www.instagram.com/muktarul.hoque/" target="_blank"><img className="contacts-img" src={require("./instagramm.png")}/></a>
                                    
                                    <a href="https://github.com/dox404" target="_blank"><img className="contacts-img" src={require("./gitthub.png")}/></a>
                                    
                                    <a href="https://www.facebook.com/muktarul.hoque.902/" target="_blank"><img className="contacts-img" src={require("./facebook.png")}/></a>
                                    
                                    <a href="muktarul.hoque01@gmail.com" target="_blank"><img className="contacts-img" src={require("./mail.png")}/></a>
                                    <a href="https://leetcode.com/ddox404/" target="_blank"><img className="contacts-img" src={require("./leetcode.png")}/></a>
                                    
                                    {/* <img className="contacts-img" src={require("./instagram.png")}/> */}
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>

    )
}

export default Contact
