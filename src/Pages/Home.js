import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Search from '../Components/Search';
import { getCountry, getRegion } from '../data/getData';

import dataJson from '../data/homeData.json';

const Home = () => {
  const [data, setData] = useState(dataJson);
  const [isLoading, setIsLoading] = useState(true);

  const [filter, setFilter] = useState("");
  const [region, setRegion] = useState("all");


  useEffect(() => {
    setIsLoading(true);
    console.log("Loading");
    setData([])
    const getNewData = async () => {
      const newData = await getCountry(filter);
      let filterData

      if (region !== "all") {
        filterData = newData.filter((item) => item.region === region)
      } else {
        filterData = newData;
      }

      setData(filterData);
    }
    const getRegionData = async () => {
      const newData = await getRegion(region);
      setData(newData);
    }

    if (filter.length === 0 && region === "all") {
      setData(dataJson);
    } else if (filter.length === 0 && region !== "all") {
      getRegionData();
    } else if (filter.length > 2) {
      getNewData();
    }
    setIsLoading(false);

  }, [filter, region])


  return (
    <section className="home">
      <div className="cw in-section">
        <Search
          filter={filter}
          setFilter={setFilter}
          region={region}
          setRegion={setRegion}
        />
        {
          isLoading ? (
            <div className="no-result">
              <h2>Loading ...</h2>
            </div>
          ) : data.length > 0 ? (
            <div className="cards" >
              {
                data && data.map((item, k) => {
                  return <Card item={item} key={k} />
                })
              }
            </div>

          ) : (
            <div className="no-result">
              <h2>No résult ...</h2>
            </div>
          )
        }

      </div>
    </section>
  )
}

export default Home