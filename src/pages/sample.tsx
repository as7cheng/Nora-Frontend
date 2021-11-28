import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataCard from '../components/card/Card';
import { Button } from 'react-bootstrap';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function Sample() {
  const [city, setCity] = useState([] as any[])
  const [term, setTerm] = useState([] as any[])
  const [cardData, setCardData] = useState([] as any[]);
  const [visible, setVisible] = useState(5);

  const url = "https://wuss8io572.execute-api.us-east-1.amazonaws.com/v1/sample?";
  const config = {
        headers: {
          'Content-Type': 'application/json'
        }
  };

  const handleCityChange = (val: any[]) => {
    setCity(val);
  }

  const handleTermChange = (val: any[]) => {
    setTerm(val);
  }

  const allCardData = async () => {
    console.log('in all card')
    var city_url: string = '';
    var term_url: string = '';
    var query_url = url;
    if (city.length > 0) {
      let cities: Array<string> = [];
      for (const k in city) {
        cities.push(city[k])
      }
      city_url = 'city=' + cities.join('&city=');
      query_url += city_url;
      console.log(city_url)
    }

    if (term.length > 0) {
      let terms: Array<String> = [];
      for (const t in term) {
        terms.push(term[t]);
      }
      term_url = '&term=' + terms.join('&term=');
      query_url += term_url;
      console.log(term_url);
    }
    console.log(query_url);
    let response = await axios.get(query_url, config);
    setCardData(response.data);
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };

  useEffect(() => {
    handleCityChange(city);
    allCardData();
  }, [city]);

  useEffect(() => {
    handleTermChange(term);
    allCardData();
  }, [term]);

  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (business: any) => {
    return (
      <DataCard props={business} />
    );
  }

  return (
   <>
      <div style={{
        marginTop: '2rem',
        marginLeft: '2rem'
      }}>
        <ToggleButtonGroup type='checkbox' value={city} onChange={handleCityChange}>
          <ToggleButton id='btn-nyc' value='New+York' variant="info">New York</ToggleButton>
          <ToggleButton id='btn-sea' value='Seattle' variant='success'>Seattle</ToggleButton>
          <ToggleButton id='btn-la' value='Los+Angeles' variant='warning'>Los Angeles</ToggleButton>
          <ToggleButton id='btn-chi' value='Chicago' variant='dark'>Chicago</ToggleButton>
          <ToggleButton id='btn-phi' value='Philadelphia' variant='danger'>Philadelphia</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div style={{
        marginLeft: '2rem',
        marginTop: '0.5rem'
      }}>
        <ToggleButtonGroup type='checkbox' value={term} onChange={handleTermChange}>
          <ToggleButton id='btn-us' value='American' variant="primary">Amrican</ToggleButton>
          <ToggleButton id='btn-chn' value='Chinese' variant='danger'>Chinese</ToggleButton>
          <ToggleButton id='btn-frc' value='French' variant='info'>French</ToggleButton>
          <ToggleButton id='btn-gmn' value='German' variant='dark'>German</ToggleButton>
          <ToggleButton id='btn-ind' value='Indian' variant='warning'>Indian</ToggleButton>
          <ToggleButton id='btn-mex' value='Mexican' variant='success'>Mexican</ToggleButton>
          <ToggleButton id='btn-ita' value='Italian' variant='info'>Italian</ToggleButton>
          <ToggleButton id='btn-jap' value='Japanese' variant='danger'>Japanese</ToggleButton>
          <ToggleButton id='btn-kor' value='Korean' variant='primary'>Korean</ToggleButton>
          <ToggleButton id='btn-por' value='Portuguese' variant='success'>Portuguese</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div style={{
		display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridRowGap: '3rem',
                gridColumnGap: '2rem',
                margin: '2rem'
		}}
                >
        {cardData.slice(0, visible).map(renderCard)}
    </div>
       <div className="d-grid gap-2">
    {visible < cardData.length && (
        <Button variant="dark" size="lg" onClick={loadMore}>
          Load More
        </Button>
   )}
</div>
  </>
  )
}

export default Sample;
