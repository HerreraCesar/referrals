import { HashLink as Link } from "react-router-hash-link";
import React from 'react'

const Item = ({ promotion }) => {
  return (
    <Link className="promotion" to={`/promotions/${promotion.id}/#`}>
      <img className="logo" src={promotion.logo} alt={promotion.name} />
      <h2 className="name">{promotion.name}</h2>
    </Link>
  )
}

export default Item