import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { getCountry, getCountryName } from '../data/getData';

import BackDark from '../assets/back-black.svg';
import BackLight from '../assets/back-white.svg';

const Details = ({ match, darkTheme }) => {
  console.log(match, darkTheme);

  const country = match.params.country;
  let history = useHistory();

  const [dataCountry, setDataCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getNewData = async () => {
      const newData = await getCountry(country);
      setDataCountry(newData[0]);
    }
    getNewData();
    setIsLoading(false);

  }, [country])

  useEffect(() => {
    if (dataCountry.borders) {

      let { borders } = dataCountry
      setIsLoading(true);

      const getNewData = async () => {
        const lang = document.getElementById("lang")

        for (let i = 0; i < borders.length; i++) {
          const langBtn = document.createElement("div")
          langBtn.className = "lang-btn"
          const newData = await getCountryName(dataCountry.borders[i]);
          langBtn.innerText = newData.name
          lang.appendChild(langBtn)
        }
      }
      getNewData();
      setIsLoading(false);
    }

  }, [dataCountry])


  const handleClick = () => {
    history.push(`/`)
  }

  return (
    <>
      <section className="go-back">
        <div className="cw in-section">
          <button onClick={handleClick}>

            {
              darkTheme === true ? (
                <img src={BackLight} alt="moon-dark" />
              ) : (
                <img src={BackDark} alt="moon-light" />
              )
            }
            Back
          </button>
        </div>
      </section>
      {
        isLoading ? (
          <section className="loading">
            <div className="cw in-section">
              Loading...
            </div>
          </section>
        ) : dataCountry.name && (
          <section className="details">
            <div className="cw in-section">
              <img src={dataCountry.flag} alt="flag" />
              <div className="block-body">
                <h2 className="name-country">
                  {dataCountry.name}
                </h2>
                <div className="body">
                  <div className="body-1">
                    <p className="population">
                      Native Name:&nbsp;
                      <span>
                        {dataCountry.nativeName}
                      </span>
                    </p>
                    <p className="population">
                      Population:&nbsp;
                      <span>
                        {dataCountry.population}
                      </span>
                    </p>
                    <p className="region">
                      Region:&nbsp;
                      <span>
                        {dataCountry.region}
                      </span>
                    </p>
                    <p className="sub-region">
                      Region:&nbsp;
                      <span>
                        {dataCountry.subregion}
                      </span>
                    </p>
                    <p className="capital">
                      Capital:&nbsp;
                      <span>
                        {dataCountry.capital}
                      </span>
                    </p>
                  </div>{/* .body-1 */}
                  <div className="body-2">
                    <p className="domain">
                      Top Level Domain:&nbsp;
                      <span>
                        {dataCountry.topLevelDomain[0]}
                      </span>
                    </p>
                    <p className="currencies">
                      Currencies:&nbsp;
                      <span>
                        {dataCountry.currencies[0].name}
                      </span>
                    </p>
                    <p className="languages">
                      Languages:&nbsp;
                      <span>
                        {
                          dataCountry.languages.map(item => item.name).join(', ')
                        }
                      </span>
                    </p>
                  </div>{/* .body-2 */}
                </div>{/* .body */}
                <div className="footer">
                  <h3 className="border">
                    Border Countries:&nbsp;
                  </h3>
                  <div id="lang">

                  </div>
                </div>{/* .footer */}
              </div>{/* .block-body */}
            </div>
          </section>
        )
      }
    </>
  )
}

export default Details