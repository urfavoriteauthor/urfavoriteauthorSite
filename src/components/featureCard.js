import React from 'react'
import Baron from '../assets/images/BARON.JPG'
// import * from '.app.css'

class Feature extends React.Component {
    render() {

        return (
            <div id="featured" className="card border-dark bg-dark text-white mb-12 content-justify-center">
                <img src={Baron} alt="featured Book" className="card-img-top" alt="..." />

                <div className="card-body bg-dark">
                    <h5 className="card-title">BARON'S WASTELAND</h5>
                    <h3 className="card-text">He murdered her family...He kidnapped her daughter...He left her for dead. Now Baron is back for vengeance and she doesnt care if the whole wasteland has to bleed before its done. She will get her daughter back and make the man responsible pay for all of the pain he's wrought. "Baron's Wasteland" is a story about a woman who loses everything and must find new strength to re-take what was lost. With the help of a few friends and some cybernetic implants, she unleashes pain on anyone who would keep her from her daughter.</h3>
                    <a href="#" className='btn btn-outline-danger'>Purchase here!</a>
                    <p className="card-text"><small className="text-muted">RZN8 Print and Publishing</small></p>
                </div>
            </div>
        )
    }
}
export default Feature;