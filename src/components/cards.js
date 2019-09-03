import React from 'react'
import BookCard from './bookCard'
import Baron from '../assets/images/BARON.JPG'
import Hunted from '../assets/images/thrillhunted.JPG'
import Ghost from '../assets/images/thrillghost.JPG'
import Lovers from '../assets/images/theloversmanual.JPG'
import Levels from '../assets/images/levels.JPG'
import Missing from '../assets/images/missingpiece.JPG'
import Warlok from '../assets/images/warlok.JPG'
import Deadwater from '../assets/images/deadinthewater.JPG'
import Thecards from '../assets/images/thecards.JPG'
import Journee from '../assets/images/journeythetraveler.JPG'
import Journee2 from '../assets/images/journeythetravelerBEYOND.JPG'
import Journee3 from '../assets/images/journee3.JPG'
import Lostfiles from '../assets/images/thrilllost.PNG'
import Timebreakers from '../assets/images/timebreakers.JPG'
import Phantasy from '../assets/images/phantasy.JPG'
import Spellbound from '../assets/images/spellbound.JPG'
import Hubris from '../assets/images/hubris.PNG'
import Bulletproof from '../assets/images/bulletproofheart.jpg'
import Claire from '../assets/images/clairvoyance.jpg'
import Moonbreaker from '../assets/images/moonbreaker.PNG'
import Zombies from '../assets/images/zombiesdontcome.PNG'
import Daughter from '../assets/images/daughterofthelastdays.JPG'
import Deadman from '../assets/images/deadmanwalking.JPG'
import Algorithm from '../assets/images/algorithm.JPG'
import Realm from '../assets/images/realmofthefallen.JPG'

class Cards extends React.Component {
    render() {
        return (
            <div className='div'>
            <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Lostfiles} title="Thrill of the Hunt:The Lost Files" />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Hunted} title="Thrill of the Hunt:Hunted"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Ghost} title="Thrill of the Hunt:Ghost Contract" />
                    </div>
                    {/* First Row */}
                </div>
                </div>
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Lovers} title="The Lover's Man-ual" />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Levels} title="Levels"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Missing} title="The Missing Piece" />
                    </div>
                </div>
                </div>
                {/* Second Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Warlok} title='Warlok' />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Deadwater} title="Dead in the Water"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Thecards} title="The Cards We're Dealt" />
                    </div>
                </div>
                </div>
                {/* Third Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Journee} title="Journee the Traveler" />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Journee2} title="Journee the Traveler:Beyond"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Journee3} title="Journee the Traveler:Endgame" />
                    </div>
                </div>
                </div>
                {/* Fourth Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Timebreakers} title="Timebreakers" />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Phantasy} title="Phantasy's Edge"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Spellbound} title="Spellbound in the Endless Night" />
                    </div>
                </div>
                </div>
                {/* Fifth Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Hubris} title="Hubris" />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Bulletproof} title="Bulletproof Heart"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Claire} title="Clairevoyance" />
                    </div>
                </div>
                </div>
                {/* Sixth Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Realm} title="Realm of the Fallen" />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Algorithm} title="Algorithm and Blu-ez"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Deadman} title="Deadman Walking" />
                    </div>
                </div>
                </div>
                {/* Seventh Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Moonbreaker} title="MoonBreaker" />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Zombies} title="Zombies Don't Come to the Hood"/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Daughter} title="Daughter of the Last Days" />
                    </div>
                </div>
                </div>
            </div>


        )
    }
}

export default Cards;