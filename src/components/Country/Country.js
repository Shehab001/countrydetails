import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, area, capital, flags, population, region, timezones } =
    props.country;
  // console.log(props);
  return (
    <div className="box">
      <h2>Name : {name.common}</h2>
      <h4>Area : {area}</h4>
      <h4>Population : {population}</h4>
      {/* <h4>Timezone : {timezones}</h4> */}
      <h4>Capital : {capital}</h4>
      <img src={flags.png} className="small" alt="flag"></img>
      <h3>Region : {region}</h3>
    </div>
  );
};

export default Country;
