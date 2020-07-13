import React from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Feature from '../components/featureCard'
import About from '../components/about'
import Social from '../components/social'

class Home extends React.Component {
    render() {
        return (
            <div id='home'>
                <div>
                    <Navbar />
                                <About />
                    <div className='container-fluid d-flex content-justify-center'>
         
                        <div className='row'>
                            <div className='col-lg-12'>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'>

                            </div>
                        </div>
                    </div>
                    <div>
                        <Feature />

                    </div>
                    <div>

                    </div>
                    <br></br>
                </div>
<Social />
    
            </div>

        )
    }
}
export default Home;