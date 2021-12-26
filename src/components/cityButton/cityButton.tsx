import React, { useState, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

let cities = [] as any[];

export const getCities = () => {
  return cities;
}

function CityButton () {
  const [city, setCity] = useState([] as any[])

  const handleCityChange = (val: any[]) => {
    setCity(val);
    return city;
  }
  const updateCity = (city: any) => {
    cities = city;
  }
  useEffect(() => {
    handleCityChange(city)
    updateCity(city)
  }, [city])

  return (
    <>
      <div style={{
        marginTop: '2rem',
        marginLeft: '2rem'
      }}>
        {console.log(getCities())}
        <ToggleButtonGroup type='checkbox' value={city} onChange={handleCityChange}>
          <ToggleButton id='btn-nyc' value='New York' variant="info">New York</ToggleButton>
          <ToggleButton id='btn-sea' value='Seattle' variant='success'>Seattle</ToggleButton>
          <ToggleButton id='btn-la' value='Los Angeles' variant='warning'>Los Angeles</ToggleButton>
          <ToggleButton id='btn-chi' value='Chicago' variant='dark'>Chicago</ToggleButton>
          <ToggleButton id='btn-phi' value='Philadelphia' variant='danger'>Philadelphia</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  )
}

export default CityButton;
