
import './Home.css'
import 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'
function Home() {

    return (
        <>
            <section id="home">
                <main className="Home-main">
                    <div className='photo-intro'>
                        <div className='container'>
                            <div className='row content'>
                                <div className="Intro col-6">
                                    <h1>Hi, I am 
                                        <span style={{ color: 'coral', fontWeight: 'bold' }}>

                                            <Typewriter
                                                words={[' Muktarul Hoque']}
                                                loop={5}
                                                cursor
                                                cursorStyle='|'
                                                typeSpeed={50}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                               
                                            />
                                        </span>









                                    </h1>
                                    <p style={{'margin-top':'10px'}}>I am a Full Stack Developer With the experice with node,react,mongo."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </div>
                                <div className="photo col-6">
                                    <img className='img' src={require('./Photos/IMG_20231201_213544.jpg')} />
                                </div>
                            </div>
                        </div>


                    </div>
                </main>
            </section>
        </>
    )
}


export default Home