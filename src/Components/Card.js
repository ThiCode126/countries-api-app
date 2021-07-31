import React from 'react';
import { useHistory } from "react-router-dom";

const Card = ({ item }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/details/${item.name}`)
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={item.flag} alt="flag" />
      <div className="body">
        <h2 className="name-country">
          {
            item.name
          }
        </h2>
        <p className="population">
          Population:&nbsp;
          <span>
            {item.population}
          </span>
        </p>
        <p className="region">
          Region:&nbsp;
          <span>
            {item.region}
          </span>
        </p>
        <p className="capital">
          Capital:&nbsp;
          <span>
            {item.capital}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Card