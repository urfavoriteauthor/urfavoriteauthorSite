import React from 'react'
import Cards from '../components/cards'
import Collage from '../assets/images/bookcollage.jpg'
import Navbar from '../components/navbar'
import Social from '../components/social'

class Books extends React.Component{
    render(){
        return(
            <div id="books">
                <Navbar/>
                <Cards/>
                <br></br>
                <Social/>
            </div>
        )
    }
}

export default Books;