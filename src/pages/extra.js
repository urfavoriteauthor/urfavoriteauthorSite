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
                                    <iframe width="560" height="420" src="https://www.youtube.com/embed/SDROvDb5S6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <h4 className='card-title'>URxFAVxAUTHOR TV</h4>
                                        <p className="card-text text-secondary">When I'm not writing, this is how I'm unwinding.Think you have what it takes to take me on? My GamerTag is URxFAVxAUTHOR for PS4/XB1</p>
                                        <a href="https://www.youtube.com/channel/UC3uuTIOPBQR32WdhTuikqdw/featured" className='btn btn-outline-danger'>Watch Here</a>
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