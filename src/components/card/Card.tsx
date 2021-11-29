import React from 'react';
import Card from 'react-bootstrap/Card';
// import './../card/Card.css'
import { Button } from 'react-bootstrap';

function DataCard(props: any) {
  function testClick() {
    console.log('yeah!')
  };
  const data = props.props;
  return (
    <Card className = "card" border="dark" style={{ width: '15rem'}}
    onClick={testClick}>
    <Card.Header as='h6'>{data.tags[0]}</Card.Header>
    <Card.Img variant="top" src={data.image} style={{ height: '10rem'}} />
    <Card.Body>
      <Card.Title as='h6'>{data.name}</Card.Title>
      <Card.Text>
        <ul>
          <li>{data.price}</li>
          <li>{data.addr}</li>
          <li>{data.phone}</li>
        </ul>
      </Card.Text>
      <Button variant="dark" href={data.url} target="_blank">Yelp Page</Button>
    </Card.Body>
  </Card>
  );
};

export default DataCard;
