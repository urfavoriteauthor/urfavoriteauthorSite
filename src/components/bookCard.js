import React from "react"


const Bookscard = props => {
    return (
        <div id='bookcards'className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt="" className='card-img-top' />
            </div>
            <div className='card-body bg-dark text-light'>
                <h4 className='card-title'>{props.title}</h4>
                <p className="card-text text-light">{props.description}</p>
            <a href={props.link} className='btn btn-outline-danger'>Purchase Here</a>
            </div>
        </div>
    )
}

export default Bookscard;