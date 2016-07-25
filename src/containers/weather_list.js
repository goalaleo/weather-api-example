import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    /*
      this is equal to:
      const lon = cityData.city.coord.lon
      const lat = cityData.city.coord.lat
    */

      return (

        <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat} /></td>
          <td><Chart data={temps} color="orange" units="°K" /></td>
          <td><Chart data={pressures} color="green" units="hPa" /></td>
          <td><Chart data={humidities} color="black" units="%" /></td>
        </tr>
      );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather}; // {weather} === {weather: weather}
}
/*
  this is identical to:

function mapStateToProps(state) {
 return {weather: state.weather}
}
*/

export default connect(mapStateToProps)(WeatherList);
