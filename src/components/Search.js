import React from "react";

export default function Search(props) {
  return (
   <div className="container-fluid">
     <div className="row py-4">
      <div className="col-12">
        <div className="col-sm-4">
         <form>
         <div className="input-group mb-3">
            <input
              type="text"
              name="city"
              className="form-control"
              value={props.city}
              onChange={props.cSearch}
              placeholder="Enter City/Country"
            />
            <button
            onClick={props.getLocation}
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2">
          <i className="fas fa-search-location"></i>
            </button>
          </div>
         </form>
        </div>
       
        <div className="col-sm-8">
          <div className="py-1">
          Cick Here To Get Coordinates <i onClick={props.getLocationInfo} className="fas fa-location"></i>
          </div>
          <form>
           
              <div className="col-md-6 position-relative">                
                <div className="input-group has-validation m-2">
                  <span className="input-group-text">Latitude</span>
                  <input
                    name="latitude"
                    type="number"
                    value={props.latitude}
                    onChange={props.cSearch}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              
              <div className="col-md-6 position-relative">
                <div className="input-group has-validation">
                  <span className="input-group-text">Longitude</span>
                  <input
                    name="longitude"
                    type="number"
                    onChange={props.cSearch}
                    value={props.longitude}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            
            <button className="btn btn-pills btn-info mt-2">Search</button>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
}
