import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import clouds from "../assets/clouds.jpg";
import rain from "../assets/rain.jpg";
import smok from "../assets/smok.jpg";
import snow from "../assets/snow.jpg";
import clear from "../assets/clear.jpg";
import wallpaperDefault from "../assets/wallpaperflare.com_wallpaper.jpg";
import bishkek from "../assets/08_bishkek.jpg";
import { useGetWeatherQuery } from "./redux/weather-api";
const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [backround, setBackground] = useState("");
  const { data } = useGetWeatherQuery(cityName);
  console.log(data);
  const cGradus = data ? (data.main.temp - 32) / 1.8 : 0;
  const feels_like = data ? (data.main.feels_like - 32) / 1.8 : 0;
  useEffect(() => {
    if (data) {
      switch (data.weather[0].main) {
        case "Rain":
          return setBackground(rain);
        case "Clouds":
          return setBackground(clouds);
        case "Snow":
          return setBackground(snow);
        case "Clear":
          return setBackground(clear);
        case "Mist":
          return setBackground(smok);
        default:
          return setBackground(bishkek);
      }
    } else {
      return setBackground(wallpaperDefault);
    }
  }, [data]);
  return (
    <StyledWeather backgroundImg={backround}>
      <StyledBlock>
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          className="input-div"
        >
          <StyledTextField
            type="text"
            placeholder="Write the city"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <StyledTitle>
          <div data-aos="zoom-in">
            <div>
              <h4>{data ? data.name : null}</h4>
            </div>
            <div>
              <h2>{cGradus.toFixed()}°C</h2>
            </div>
          </div>
          <StyledStatus>
            <span>{data ? data.weather[0].main : ""}</span>
          </StyledStatus>
        </StyledTitle>
        <StyledFooter data-aos="flip-down" data-aos-duration="1500">
          <div>
            <div>{feels_like.toFixed()}°C</div>
            <div>Feels Like</div>
          </div>
          <div>
            <div>{data ? data.main.humidity : 0}%</div>
            <div>Humidity</div>
          </div>
          <div>
            <div>{data ? data.wind.speed : 0} MPH</div>
            <div>Winds</div>
          </div>
        </StyledFooter>
      </StyledBlock>
    </StyledWeather>
  );
};
const StyledWeather = styled("div")(({ backgroundImg }) => ({
  width: "100%",
  padding: "0 25%",
  height: "100vh",
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "cover",
  " @media screen and (max-width: 450px)": {
    padding: "0 5%",
  },
}));
const StyledBlock = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  "& .input-div": {
    padding: "0 20%",
    border: "none",
  },
  " @media screen and (max-width: 1000px)": {
    "& .input-div": {
      padding: "0 5%",
    },
  },
}));
const StyledTitle = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "30px",
  color: "white",
}));
const StyledFooter = styled("div")(() => ({
  width: "100%",
  padding: "3% 0",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#a4a7ab7e",
  borderRadius: "10px",
  color: "white",
  fontSize: "20px",
}));
const StyledTextField = styled("input")(() => ({
  width: "100%",
  height: "50px",
  backgroundColor: "#fffdfd2d",
  borderRadius: "30px",
  paddingLeft: "10px",
  fontSize: "20px",
  border: "5px solid #ffffff8b",
  color: "#fff",
  outline: "none",
  "&:focus": {
    border: "5px solid #fdf4f44d",
  },
  "::placeholder": {
    color: "#fff",
  },
}));
const StyledStatus = styled("div")(() => ({
  transform: "rotate(270deg)",
  fontSize: "25px",
}));
export default Weather;
