import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch pb-5">
      <div className="card shadow">
        <img className="card-img-top" src={props.img} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{props.reference}</h5>
          <p className="card-text">{props.verse}</p>
        </div>
        <div className="card-footer bg-dark">
          <small className="text-center d-block text-white">Day {props.day}</small>
        </div>
      </div>
    </div>
  )
}

export default Card
