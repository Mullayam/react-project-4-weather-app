import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WeatherApp from "./pages/WeatherApp";
import Search from "./components/Search";
import axios from "axios";
// import geolocation from "react-navigator-geolocation";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lon: "",
      weatherData: "",
      city: "",
      show: false,
    };
  }
 
  changeSearch = (e) => {
    const getData = e.target.name;
    if (getData === "city") {
      this.setState({
        city: e.target.city.value,
      });
    } else if (getData === "latiude") {
      this.setState({
        lat: e.target.city.value,
      });
    } else if (getData === "longitude") {
      this.setState({
        lon: e.target.longitude.value,
      });
    }
  };
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude,
             
            });
            console.log(this.state.lat);
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=28.7819349&lon=76.1667694&appid=8063e48d9ee1bf93574aa8d48971fc59`
              )
              .then((r) => {
                this.setState({
                  city: r.data.name,
                  weatherData: r.data,
                  show: true,
                   
                });
              })
              .catch((e) => {
                console.log(e);
              });
          }, 500);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert("failed");
    }
  };

  componentDidMount() {
    // let a = alert();
    // if(a){
    //   this.getLocation();
    //   this.setState({
    //     show:true,
    //   })
    // }else{
    //   this.setState({
    //     show:false,
    //   })
    // }
  }
   
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route index exact path="/weather" element={<WeatherApp />} />
            <Route
              index
              exact
              path="/"
              element={<Home 
                displayData={this.state.show}
                wtherData={this.state.weatherData}
                />}
            />
          </Routes>
          <Search
            latitude={this.state.lat}
            longitude={this.state.lon}
            // weatherData={this.state.weatherData}
            city={this.state.city}
            cSearch={this.changeSearch}
            getLocationInfo={this.getLocation}
          />
        </BrowserRouter>
      </div>
    );
  }
}
