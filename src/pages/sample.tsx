import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataCard from '../components/card/Card';
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import './sample.css';

function Sample() {
  const [city, setCity] = useState([] as any[])
  const [term, setTerm] = useState([] as any[])
  const [cardData, setCardData] = useState([] as any[]);
  const [visible, setVisible] = useState(10);

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
    }

    if (term.length > 0) {
      let terms: Array<String> = [];
      for (const t in term) {
        terms.push(term[t]);
      }
      term_url = '&term=' + terms.join('&term=');
      query_url += term_url;
    }

    let response = await axios.get(query_url, config);
    setCardData(response.data);
  };

  const loadMore = () => {
    setVisible(visible + 10);
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

     <div className='mb-auto' style={{
       marginTop: '2rem',
       marginLeft: '2rem',
     }}>

       <ToggleButtonGroup size='sm' type='checkbox' value={city} onChange={handleCityChange}>
         <ToggleButton id='nyc' value='New+York' variant="outline-info" className='tb'>
           New York
         </ToggleButton>
         <ToggleButton id='sea' value='Seattle' variant='outline-success' className='tb'>
           Seattle
         </ToggleButton>
         <ToggleButton id='la' value='Los+Angeles' variant='outline-warning' className='tb'>
           Los Angeles
         </ToggleButton>
         <ToggleButton id='chi' value='Chicago' variant='outline-dark' className='tb'>
           Chicago
         </ToggleButton>
         <ToggleButton id='phi' value='Philadelphia' variant='outline-danger' className='tb'>
           Philadelphia
         </ToggleButton>
        </ToggleButtonGroup>

     </div>

     <div className='mb-auto' style={{
       marginLeft: '2rem',
       marginTop: '0.5rem'
     }}>

      <ToggleButtonGroup size='sm' type='checkbox' value={term} onChange={handleTermChange}>
       <ToggleButton id='us' value='American' variant="outline-primary" className='tb'>
         Amrican
       </ToggleButton>
       <ToggleButton id='chn' value='Chinese' variant='outline-danger' className='tb'>
         Chinese
       </ToggleButton>
       <ToggleButton id='frc' value='French' variant='outline-info' className='tb'>
         French
       </ToggleButton>
       <ToggleButton id='gmn' value='German' variant='outline-success' className='tb'>
         German
       </ToggleButton>
       <ToggleButton id='ind' value='Indian' variant='outline-warning' className='tb'>
         Indian
       </ToggleButton>
       <ToggleButton id='ita' value='Italian' variant='outline-info' className='tb'>
         Italian
       </ToggleButton>
       <ToggleButton id='jap' value='Japanese' variant='outline-danger' className='tb'>
         Japanese
       </ToggleButton>
       <ToggleButton id='kor' value='Korean' variant='outline-primary' className='tb'>
         Korean
       </ToggleButton>
       <ToggleButton id='mex' value='Mexican' variant='outline-dark' className='tb'>
         Mexican
       </ToggleButton>
       <ToggleButton id='por' value='Portuguese' variant='outline-success' className='tb'>
         Portuguese
       </ToggleButton>
      </ToggleButtonGroup>
     </div>

     <hr />

     <div className='mb-auto' style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridRowGap: '3rem',
      gridColumnGap: '1rem',
      margin: '3rem'
     }}>

      {cardData.slice(0, visible).map(renderCard)}

     </div>

     <br />

     <div className="d-grid gap-2">

      {visible < cardData.length && (
       <Button variant="dark" size="sm" onClick={loadMore}>
        Load More
       </Button>
      )}

     </div>

  </>
  );
}

export default Sample;
