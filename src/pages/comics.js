import React from 'react'
import Navbar from '../components/navbar'
import Comiccard from '../components/comicCard'
import Social from '../components/social'

class Comics extends React.Component{
    render(){
        return(
            <div>
            <Navbar/>
            <h3>Everyone loves Heroes, so I decided to create my own. There's nothing more enjoyable than stretching your imagination to create new worlds. Heroes and Villains collide as I tell new stories with new adventures for all ages!</h3>
            <Comiccard/>
<br></br>
<Social/>
            </div>
        )
    }
}

export default Comics;