import React, {useState} from 'react'
import Container from "../components/Container";
import SearchWrapper from "../components/SearchWrapper";
import WeatherData from "../components/WeatherData";

export default function Home() {
    const [cityName, setCityName] = useState("");
    const [cityCoordinates, setCityCoordinates] = useState([]);

  return (
      <Container>
          <SearchWrapper
              cityName={cityName}
              setCityName={setCityName}
              setCityCoordinates={setCityCoordinates}
          />
          <WeatherData coordinates={cityCoordinates} />
      </Container>
  )
}
