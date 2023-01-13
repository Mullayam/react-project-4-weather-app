import React from "react";
import WeatherApp from "./WeatherApp";

export default function Home(props) {
  
  const i = props.displayData;
  const {wtherData:data } = props;
  
  let msg; 
   if(i===true) {
   msg = "Loading Data Please Wait.."
   }
const KtoC =(k)=>{
return (k-273.16).toFixed(2)
}
function getTheDate(v){
  const date = new Date(v*1000)
  return date.toLocaleTimeString();
}
  return (
    <>
      <div className="container-fluid py-4">
        <div>
          <div className="col-12">
            <div className="h-100 p-5 bg-dark text-light border rounded-3">
              <h2>
                React JS WeatherApp <i className="fa-solid fa-cloud"></i>
              </h2>
              <p>{msg}</p>
            </div>
          </div>
        </div>
        
        {i ? (
          <div>
            <div className="d-flex justify-content-center p-3">
           {/* <div
                className="spinner-border"
                style={{ width: "3rem", height: "3rem" }}
                role="status">
                <span className="visually-hidden">Loading...</span>
              </div> */}
            </div>
            <section className="vh-50">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-md-8 col-lg-6 col-xl-4">
                    <div
                      className="card"
                      style={{ color: "#4B515D", borderRadius: "35px" }}>
                      <div className="card-body p-4">
                        <div className="d-flex">
                          <h6 className="flex-grow-1">{data.name}</h6>
                          <h6>{ getTheDate(data.sys.sunrise)}</h6>
                        </div>

                        <div className="d-flex flex-column text-center mt-5 mb-4">
                          <h6
                            className="display-4 mb-0 font-weight-bold"
                            style={{ color: "#1C2331" }}>
                            {" "}
                           {KtoC(data.main.temp)}°C{" "}
                          </h6>
                          <span className="small" style={{ color: "#868B94" }}>
                          {"Clear"}
                          </span>
                        </div>

                        <div className="d-flex align-items-center">
                          <div
                            className="flex-grow-1"
                            style={{ fontSize: "1rem" }}>
                            <div>
                              <i
                                className="fas fa-wind fa-fw"
                                style={{ color: "#868B94" }}
                              ></i>{" "}
                              <span className="ms-1"> {data.wind.speed} km/h</span>
                            </div>
                            <div>
                              <i
                                className="fas fa-tint fa-fw"
                                style={{ color: "#868B94" }}
                              ></i>{" "}
                              <span className="ms-1"> {data.main.humidity}% </span>
                            </div>
                            <div>
                              <i
                                className="fas fa-sun fa-fw"
                                style={{ color: "#868B94" }}
                              ></i>{" "}
                              <span className="ms-1"> 0.2h </span>
                            </div>
                            <div>
                            <i className="fas fa-temperature-up"  style={{ color: "#868B94" }}></i>
                              {" "}
                              <span className="ms-1"> {data.main.temp_max} </span>
                            </div>
                            <div>
                            <i className="fas fa-temperature-down"  style={{ color: "#868B94" }}></i>
                              {" "}
                              <span className="ms-1"> {data.main.temp_min} </span>
                            </div>
                            <div>
                            <i className="fas fa-water-rise"  style={{ color: "#868B94" }}></i>
                              {" "}
                              <span className="ms-1"> {data.main.sea_level} </span>
                            </div>
                          </div>
                          <div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                              width="100px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <WeatherApp />
        )}
      </div>
    </>
  );
}
