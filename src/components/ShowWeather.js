import React from "react"

const ShowWeather = () =>{
    return (
        <React.Fragment>
            <div className="showWeather">
                <div className="weather_main">
                    <h1 className="weather_heading">
                        Seattle<br /> <span> AR</span>
                    </h1>
                    <h3 className="temp">Temperature: 25C</h3>
                    <hr />
                    <div className="weatherData">
                        <p>
                            Pressure <br /> 10 atm
                        </p>
                        <p>
                            Visibility <br /> 5 Km
                        </p>
                    </div>
                    <div className="weatherData">
                        <p>
                            Humidity: <br /> 80 %
                        </p>
                        <p>
                            Clouds: <br /> 10 %
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ShowWeather
