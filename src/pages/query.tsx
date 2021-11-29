import React from 'react';
import { useState, useEffect } from 'react';
import Top from '../components/display/displayTop';
import Rank from '../components/display/displayRank'
import { Badge, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';

function Query() {

  const [topTerm, setTop] = useState("");
  const [rankTerm, setRank] = useState("") ;
  const [topData, setTopData] = useState([] as any[]);
  const [rankData, setRankData] = useState([] as any[]);
  const topUrl = "https://wuss8io572.execute-api.us-east-1.amazonaws.com/v1/top?term=";
  const rankUrl = "https://wuss8io572.execute-api.us-east-1.amazonaws.com/v1/rank?term=";
  const config = {
        headers: {
          'Content-Type': 'application/json'
        }
  };

  const handleTop = (val: any) => {
    setTop(val)
  }

  const handleRank = (val: any) => {
    setRank(val);
  }

  const fetchTop = async() => {
    if (topTerm !== "") {
      console.log('top is empty')
      const url = topUrl + topTerm;
      const response = await axios.get(url, config);
      console.log(response.data);
      setTopData(response.data);
    }
  }

  const fetchRank = async() => {
    if (rankTerm !== "") {
      const url = rankUrl + rankTerm;
      const response = await axios.get(url);
      setRankData(response.data);
    }
  }


  useEffect(() => {
    handleTop(topTerm);
    fetchTop();
  }, [topTerm]);

  useEffect(() => {
    handleRank(rankTerm);
    fetchRank();
  }, [rankTerm]);


  useEffect(() => {
    fetchTop();
  }, []);


  return (
    <>
    <div style={{
      marginTop:'3rem',
      marginLeft: '5rem',
      marginRight: '5rem'
    }}>
      <h1>
        <Badge bg='success'>
          Based on the current data, we can do some fun queries
        </Badge>
        <br />
        <Badge bg='danger'>Here are two examples</Badge>
        <br />
        <br />
        <Badge bg='transparent' text='dark'>
        The Top3 cities with the best <DropdownButton
        as={ButtonGroup} title="Select" id="bg-nested-dropdown"
        variant='dark' onSelect={handleTop}>
            <Dropdown.Item eventKey="American">American</Dropdown.Item>
            <Dropdown.Item eventKey="Chinese">Chinese</Dropdown.Item>
            <Dropdown.Item eventKey="French">French</Dropdown.Item>
            <Dropdown.Item eventKey="German">German</Dropdown.Item>
            <Dropdown.Item eventKey="Indian">Indian</Dropdown.Item>
            <Dropdown.Item eventKey="Mexican">Mexican</Dropdown.Item>
            <Dropdown.Item eventKey="Italian">Italian</Dropdown.Item>
            <Dropdown.Item eventKey="Japanese">Japanese</Dropdown.Item>
            <Dropdown.Item eventKey="Korean">Korean</Dropdown.Item>
            <Dropdown.Item eventKey="Portuguese">Portuguese</Dropdown.Item>
          </DropdownButton> Food
        </Badge>
      </h1>
      {console.log(topData)}
      <Top props={topData} />
    <br />
    <h2>
       <Badge bg='transparent' text='dark'>
        The Top5 cities love <DropdownButton
        as={ButtonGroup} title="Select" id="bg-nested-dropdown"
        variant='dark' onSelect={handleRank}>
            <Dropdown.Item eventKey="American">American</Dropdown.Item>
            <Dropdown.Item eventKey="Chinese">Chinese</Dropdown.Item>
            <Dropdown.Item eventKey="French">French</Dropdown.Item>
            <Dropdown.Item eventKey="German">German</Dropdown.Item>
            <Dropdown.Item eventKey="Indian">Indian</Dropdown.Item>
            <Dropdown.Item eventKey="Mexican">Mexican</Dropdown.Item>
            <Dropdown.Item eventKey="Italian">Italian</Dropdown.Item>
            <Dropdown.Item eventKey="Japanese">Japanese</Dropdown.Item>
            <Dropdown.Item eventKey="Korean">Korean</Dropdown.Item>
            <Dropdown.Item eventKey="Portuguese">Portuguese</Dropdown.Item>
          </DropdownButton> food the most
        </Badge>
    </h2>
      <Rank props={rankData} />
    </div>

  </>
  );
};

export default Query;
