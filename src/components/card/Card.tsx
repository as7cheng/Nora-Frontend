import React from 'react';
import './../card/Card.css'
import { Button, Card } from 'react-bootstrap';

function DataCard(props: any) {
  function testClick() {
    console.log('yeah!')
  };
  const data = props.props;
  return (
    <Card className = "card" border="dark" style={{ width: '15rem'}}
    onClick={testClick}>
    <Card.Header as='h6'><strong>{data.tags[0]}</strong></Card.Header>
    <Card.Img variant="top" src={data.image} style={{ height: '11rem'}} />
    <Card.Body>
      <Card.Title as='h6'><strong>{data.name}</strong></Card.Title>
      <Card.Text>
        <ul>
          <li>{data.price}</li>
          <li>{data.addr}</li>
          <li>{data.phone}</li>
        </ul>
      </Card.Text>
      <Button variant="dark" href={data.url} target="_blank" size='sm'
      style={{
        marginLeft: '3.7rem'
      }}>
        Yelp Page
      </Button>
    </Card.Body>
  </Card>
  );
};

export default DataCard;
