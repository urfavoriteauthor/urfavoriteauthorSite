import React from "react"


const Bookscard = props => {
    return (
        <div id='bookcards'className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt="" className='card-img-top' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className="card-text text-secondary">{props.description}</p>
            <a href="#" className='btn btn-outline-success'>Purchase Here</a>
            </div>
        </div>
    )
}

export default Bookscard;