import React from 'react'
import Facebook from '../assets/images/facebook.png'
import Twitter from '../assets/images/twitter.png'
import Instagram from '../assets/images/instagram.png'
import Patreon from '../assets/images/patreon.png'

class Social extends React.Component {
    render() {
        return (
            <nav>
                <div id='social'>
                    <ul className='social'>
                        <a href='https://www.facebook.com/mrnmporterfield/' target='_blank'><li id='facebook'><img src={Facebook} alt='' width='70px' />Facebook</li></a>
                        <a href='https://www.instagram.com/urfavoriteauthor/' target="_blank"><li id='instagram'><img src={Instagram} alt='' width='50px' />Instagram</li></a>
                        <a href='https://twitter.com/URxFAVxAUTHOR' target="_blank"><li id='twitter'><img src={Twitter} alt='' width='50px' />Twitter</li></a>
                        <a href='https://www.patreon.com/Urfavoriteauthor' target='_blank'><li id='patreon'><img src={Patreon} alt='' width='100px' />Patreon</li></a>
                        <a href='http://resonate-publishing.com/' target='_blank'> <li className='muted'>RZN Print and Publishing~N.M. Porterfield</li></a>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Social;