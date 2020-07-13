import React from 'react'
import Baron from '../assets/images/BARON.JPG'
import Candy from '../assets/images/CandyCover.jpg'
// import * from '.app.css'

class Feature extends React.Component {
    render() {

        return (
            <div id="featured" className="card border-dark bg-dark text-white mb-12 content-justify-center">
                <img src={Candy} alt="featured Book" className="card-img-top" alt="..." />

                <div className="card-body bg-dark">
                    <h2 className="card-title">CANDY</h2>
                    <h2 className="card-text">Kandace Bell spent her entire life at the bottom.
A young black girl with aspirations to be something
greater than what the world told her she would be.
But as she grew older, the hopes and dreams she had
as a child begin to fade. When money gets tight,
Kandace decides to take a more unconventional approach to making money.
Smart, Beautiful, Relentless, and Ruthless. Kandace Bell
brings a new definition to being hot in the streets. However, as her
reputation grows, it becomes apparent that if she wants
anything of her own in this world, she will have to take
it by force.</h2>
                    <a href="https://squareup.com/store/urfavoriteauthor/item/baron-s-wasteland-1" target='_blank' className='btn btn-outline-danger'>Purchase here!</a>
                    <p className="card-text"><small className="text-muted">RZN8 Print and Publishing</small></p>
                </div>
            </div>
        )
    }
}
export default Feature;