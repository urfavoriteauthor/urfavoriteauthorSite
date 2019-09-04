import React from 'react'
import Navbar from '../components/navbar'
import Storytime from '../assets/images/storytime.JPG'
import Urfavoriteauthor from '../assets/images/urfavoriteauthor.JPG'
import Social from '../components/social'

class Extra extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <h3>When I'm not Working on Books, writing comics, penning screenplays, or reciting poetry, this is where you can find me!</h3>
                <div className="container-fluid d-flex content-justify-center">
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div>
                                <div className='card text-center shadow'>
                                    <div className='overflow'>
                                        <img src={Storytime} alt="" className='card-img-top' />
                                    </div>
                                    <div className='card-body text-dark'>
                                        <iframe id='anchor' src="https://anchor.fm/urfavoriteauthor/embed" height="102px" width="325px" frameborder="0" scrolling="no"></iframe>
                                        <h4 className='card-title'>Story Time</h4>
                                        <p className="card-text text-secondary">Hello Creation Nation. Its #urfavoriteauthor here doing Book readings and discussing the world at large. www.nmporterfield.com</p>
                                        <a href="#" className='btn btn-outline-danger'>Listen Here!</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div>
                                <div className='card text-center shadow'>
                                    <div className='overflow'>
                                        <img src={Urfavoriteauthor} alt="" className='card-img-top' />
                                    </div>
                                    <div className='card-body text-dark'>
                                        <iframe id="twitch" src="https://player.twitch.tv/?channel=urfavoriteauthor" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/urfavoriteauthor?tt_content=text_link&tt_medium=live_embed">Watch live video from urfavoriteauthor on www.twitch.tv</a>
                                        <h4 className='card-title'>Urfavoriteauthor Twitch TV</h4>
                                        <p className="card-text text-secondary">When I'm not writing, this is how I'm unwinding.Think you have what it takes to take me on? My GamerTag is URxFAVxAUTHOR for PS4/XB1</p>
                                        <a href="https://player.twitch.tv/?channel=urfavoriteauthor" className='btn btn-outline-danger'>Watch Here</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
<br></br>
                <Social/>
                </div>
            </div>
            
        )
    }
}

export default Extra;