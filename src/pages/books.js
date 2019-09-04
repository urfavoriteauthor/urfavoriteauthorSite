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
                <h3>There is absolutely a story here for everyone. Whether you're a fan of Sci-Fi, Horror, Thriller's, or Romance; I'm confident I've got a story that resonates with you!</h3>
                <Cards/>
                <br></br>
                <Social/>
            </div>
        )
    }
}

export default Books;