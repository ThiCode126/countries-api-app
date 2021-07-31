import React from 'react';

import SearchSvg from '../assets/search.svg';

const Search = ({ filter, setFilter, region, setRegion }) => {


  return (
    <section className="search">
      <div className="cw in-section">
        <div className="filter-block">
          <label htmlFor="filter">Search for a country...</label>
          <img src={SearchSvg} alt="search" />
          <input
            id="filter"
            type="text"
            placeholder="Search for a country..."
            value={filter}
            onChange={e => setFilter(e.target.value)} />
        </div>
        <div className="region-block">
          <label htmlFor="region">Select for a region...</label>
          <select id="region" value={region} onChange={e => setRegion(e.target.value)}>
            <option value="all">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default Search