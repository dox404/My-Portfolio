import {Routes, Route} from "react-router-dom";

import Home from '../Pages/Home/Home'
import Skills from '../Pages/Skills/Skills'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'


const Pages = () => {
    return (
        <>



            <Routes>
               
                    {/* <Route exact path='/login' element={<Login />}></Route> */}
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    {/* <Route path='/signup' element={<Signup/>}></Route> */}
                    <Route path='/skills' element={<Skills/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    
                
                
            </Routes>



        </>

    )
}

export default Pages