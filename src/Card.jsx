import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.img} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.reference}</h5>
        <p className="card-text">{props.verse}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted text-center d-block">{props.attr}</small>
      </div>
    </div>
  )
}

export default Card
