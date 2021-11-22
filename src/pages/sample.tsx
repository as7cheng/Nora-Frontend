import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataCard from '../components/card/Card';
import { Button } from 'react-bootstrap';

function Sample() {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(5);

  const allCardData = async () => {
    const response = await axios.get("http://ec2-54-242-17-189.compute-1.amazonaws.com:8765/");
      console.log(response.data);
      setCardData(response.data);
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };

  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (business: any, index: any) => {
    return (
      <DataCard props={business} />
    );
  }


  return (
   <div className="wrapper">
    <div style={{
		display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridRowGap: '5rem',
                gridColumnGap: '0.5rem',
                margin: '5rem'
		}}
                >
          {cardData.slice(0, visible).map(renderCard)}
    </div>
    <div>
    {visible < cardData.length && (
      <Button variant="secondary" size="lg" onClick={loadMore}>
      Load More
      </Button>
      )}
    </div>
  </div>
  )
}

export default Sample;
