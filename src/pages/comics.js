import React from 'react'
import Navbar from '../components/navbar'
import Comiccard from '../components/comicCard'
import Social from '../components/social'

class Comics extends React.Component{
    render(){
        return(
            <div>
            <Navbar/>
            <Comiccard/>
<br></br>
<Social/>
            </div>
        )
    }
}

export default Comics;