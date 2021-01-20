import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyChart from './MyChart';
import DataField from './DataField';
import Olaf from '../images/olaf.png';
import Sun from '../images/warm.png';
import Cake from '../images/cake.png';

const WeatherData = ({
  lastData, categories, temp, changeGraph, chartLoading, unit,
}) => {
  const {
    dhtTemp, groundTemp, airPressure, Humidity,
    convertedTime,
  } = lastData;

  const [showChart, setShowChart] = useState(false);

  const chart = showChart && !chartLoading
    ? <MyChart temp={temp} categories={categories} unit={unit} />
    : null;

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setShowChart(!showChart);
    }
  };

  const image = showChart ? null : <div className="imageContainer"><img src={dhtTemp >= 0 ? Sun : Olaf} alt="temperature icon" id="image" /></div>;

  return (
    <div className="data-page">
      <div className="header-data">
        <DataField name="dhttemp" data={dhtTemp} text="Hőmérséklet:" unit="C°" onClick={() => changeGraph('dhtTemp')} />
        <DataField name="ground" data={groundTemp} text="Talajhőmérséklet:" unit="C°" onClick={() => changeGraph('groundTemp')} />
        <DataField data={airPressure} text="Légnyomás" unit="hPa" onClick={() => changeGraph('pressure')} />
        <DataField data={Humidity} text="Páratartalom:" unit="%" onClick={() => changeGraph('humidity')} />
        <br />
      </div>
      <DataField data={convertedTime} text="" color="#3399CC" additionalClass="time" />

      <div className="showChart data active" onClick={() => setShowChart(!showChart)} role="button" tabIndex={0} onKeyPress={handleKeyPress}>Grafikon</div>
      {chart}
      {image}

    </div>
  );
};
WeatherData.propTypes = {
  unit: PropTypes.string.isRequired,
  lastData: PropTypes.objectOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  temp: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeGraph: PropTypes.func.isRequired,
  chartLoading: PropTypes.bool.isRequired,
};

export default WeatherData;
