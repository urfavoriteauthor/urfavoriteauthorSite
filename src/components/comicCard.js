import React from 'react'
import Herocity from '../assets/images/herocity.jpg'
import Golem from '../assets/images/golem.jpg'
import Ghost from '../assets/images/ghost.PNG'
import Prom from '../assets/images/prom.JPG'
import Rem from '../assets/images/remmanifest.JPG'
import Wildlyfe from '../assets/images/wildlyfe.JPG'
import BookCard from './bookCard'

class Comiccards extends React.Component{
    render(){
        return(
            <div>
                 <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Herocity} title="Hero City Rejects" />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Golem} title="Golem Gladiators"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Ghost} title="G.H.O.S.T." />
                    </div>
                    {/* First Row */}
                </div>
                </div>
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Prom} title="Prom of the Dead" />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Rem} title="REM Manifest"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Wildlyfe} title="The Wildlyfe" />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Comiccards;