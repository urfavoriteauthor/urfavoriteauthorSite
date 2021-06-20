import React from 'react'
import Herocity from '../assets/images/herocity.jpg'
import Golem from '../assets/images/GolemGenesis.JPG'
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
                        <BookCard imgsrc={Herocity} title="Hero City Rejects" description='Heroes are everywhere. But with super powers running rampant, sometimes it takes a different kind of hero to save the day. Hero City Rejects presents a vast universe full of a variety of different heroes from different backgrounds. From a hero with stress related strength and durability, to a hero who can rebound any attack that hits them, from an Angel who uses light beams to decimate her foes, to a hero with a fist so powerful that only the Gods should wield it. There is a lot to find and enjoy. Because here...anyone can be a hero' link='/comics'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Golem} title="Golem Genesis" description='In the World of Terra, Golems fight in massive battles to detrmine who among them is the most powerful. Chris Carter and his golem Cutter travel from city to city, testing their own strength while learning more about themselves and what it means to really have a friend' link='https://squareup.com/store/urfavoriteauthor/item/golem-gladiator-s-rock-issue'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Ghost} title="G.H.O.S.T." description ='The discovery of a new form of energy led to a massive advancement of human technology. But when the source of that energy comes from a demon dimension, a special team must be assembled to send them back to the hell they came from.' link='https://squareup.com/store/urfavoriteauthor/item/g-h-o-s-t-volume' />
                    </div>
                    {/* First Row */}
                </div>
                </div>
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Prom} title="Prom of the Dead" description='It was the most important night of their lives. So when it gets interrupted by a horde of the undead, three girls put their heels down and fight back. This will be a night to die for...if you arent dead already' link='/comics' />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Rem} title="REM Manifest" description='REM Manifest, an ability given to only a gifted few who, while lucid dreaming, have the ability to drastically change the dreamscape bending it to their will. But when the sandman is killed by Nightmare, they must find new strength to save all dreams everywhere.' link='/comics'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Wildlyfe} title="The WildLyfe" description='Welcome to Amazonia...a concrete jungle where only the strong survive. From Corrupt cops, to drug pushing gangsters, its going to be a wild ride that will definitely make you want to let out your inner beast.' link='/comics'/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Comiccards;