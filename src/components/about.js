import React from 'react'
import Urfavoriteauthor from '../assets/images/urfavoriteauthor.JPG'

class About extends React.Component {
    render() {
        return (
            <div id='about' className='container-fluid d-flex content-justify-center'>
                <div id='overflow'>
                    <div className='card mb-3'>
                        <img src={Urfavoriteauthor} alt='' className='card-img-top' width='500px' />

                        <div className='card-body text-dark'>
                            <h4 className='card-title'>Meet N.M. Porterfield</h4>
                            <p className='card-text'>"Thank you for joining the creation nation. My name is N.M. Porterfield and if you’re here, that means I’m on my way to becoming your favorite author (if I’m not already). I write in a variety of different genres(Action, Sci-if, Fantasy, Romance, Horror) I also write in a variety of different mediums(Comic books, poetry, music, and screenplays). My belief is that creativity is not an abstract quality that only a few have, but an internal part of everyone’s existence. Our life’s purpose, is therefore, to bring that out. As you connect with me and I share with you, my goal is to make that creativity flourish and grow. Let’s create new worlds together through words and art."</p>
                            <p className='card-subtitled text-muted'>from N.M.Porterfield</p>
                            <a href="https://squareup.com/store/urfavoriteauthor" target='_blank' class="btn btn-danger">Find Your Next Book Here!</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default About;