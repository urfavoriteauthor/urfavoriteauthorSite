import React from 'react'
import { Link} from 'react-router-dom'
import Home from '../pages/home'
import Books from '../pages/books'
import Comics from '../pages/comics'
import Extra from '../pages/extra'
import Signature from '../assets/images/signaturewhite.png'

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                 <ul id='navbar'>
                     <Link to= '/'>
                     <li>
<img src={Signature} height='40px'/>
                     </li></Link>
            <Link to='/home'>
                <li>Home</li>
            </Link>
            <Link to='/books'>
                <li>Books</li>
            </Link>
            <Link to='/comics'>
                <li>Comics</li>
            </Link>
            <Link to='/extra'>
                <li>Extra</li>
            </Link>
            </ul>
            </nav>
        )
    }
}

export default Navbar;