import { useState, useEffect } from 'react';
import Top from '../components/display/displayTop';
import Rank from '../components/display/displayRank';
import { Badge, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';

function Query() {
  const [topTerm, setTop] = useState("");
  const [rankTerm, setRank] = useState("") ;
  const [topData, setTopData] = useState([] as any[]);
  const [rankData, setRankData] = useState([] as any[]);
  const [showTop, setShowTop] = useState("Select");
  const [showRank, setShowRank] = useState("");

  const topUrl = "https://wuss8io572.execute-api.us-east-1.amazonaws.com/v1/top?term=";
  const rankUrl = "https://wuss8io572.execute-api.us-east-1.amazonaws.com/v1/rank?term=";
  const config = {
        headers: {
          'Content-Type': 'application/json'
        }
  };

  const handleTop = (val: any) => {
    setTop(val);
    setShowTop(val);
  };

  const handleRank = (val: any) => {
    setRank(val);
    setShowRank(val);
  };

  const fetchTop = async() => {
    if (topTerm !== "") {
      const url = topUrl + topTerm;
      const response = await axios.get(url, config);
      setTopData(response.data);
    }
  };

  const fetchRank = async() => {
    if (rankTerm !== "") {
      const url = rankUrl + rankTerm;
      const response = await axios.get(url);
      setRankData(response.data);
    }
  };

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

  useEffect(() => {
    setShowTop("Select")
  }, []);

  useEffect(() => {
    setShowRank("Select")
  }, []);

  return (
    <>

      <div style={{
       marginTop:'3rem',
       marginLeft: '5rem',
       marginRight: '5rem'
      }}>

       <h4 style={{textAlign: 'left'}}>

        <Badge bg='primary'>
        Based on current database, we can do some fun queries
        </Badge>

        <br />

        <Badge bg='warning' text='dark'>
        All queries are done by server not the frontend <br />
        </Badge>

        <br />

        <Badge bg='danger'>
        Let's see two examples:
        </Badge>

        <br />

        <hr />

        <Badge bg='transparent' text='dark'>
        The Top 3 metropolitans with the best <DropdownButton
         as={ButtonGroup} title={showTop} id="bg-nested-dropdown"
         variant='success' onSelect={handleTop}>

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

       </h4>

       <Top props={topData} />

       <br />

       <hr />

       <h4>

        <Badge bg='transparent' text='dark'>
        The Top 5 cities love <DropdownButton
         as={ButtonGroup} title={showRank} id="bg-nested-dropdown"
         variant='info' onSelect={handleRank}>
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

       </h4>

       <Rank props={rankData} />

      </div>

  </>
  );
}

export default Query;
