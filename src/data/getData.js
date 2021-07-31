const getTheData = async (url) => {

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  try {
    const res = await fetch(url, requestOptions);
    if (res.ok) {
      const data = await res.json();
      return data
    } else {
      return []
    }
  } catch (err) {
    console.error(err);
  }
}

export const getCountry = async (name) => {
  let url = `https://restcountries.eu/rest/v2/name/${name}`
  return await getTheData(url);
}

export const getRegion = async (region) => {
  let url = `https://restcountries.eu/rest/v2/region/${region}`
  return await getTheData(url);
}
export const getCountryName = async (code) => {
  let url = `https://restcountries.eu/rest/v2/alpha/${code}`
  return await getTheData(url);
}