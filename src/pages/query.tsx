import React from 'react';
import { useState, useEffect } from 'react';
import Top from '../components/display/displayTop';
import Rank from '../components/display/displayRank'

function Query() {

  const [term1, setTerm1] = useState("");
  const [term2, setTerm2] = useState("") ;
  let term = 'Chinese'
  return (
    <>
    <div style={{
      marginTop:'5rem',
      justifyContent: "center",
    }}>
      <h4>Base on current dataset, we can do some intsresting quries</h4>
      <h4>Here are some examples</h4>
    </div>
    <br />
    <div>
      <h4>Where you can find the best Indian food?</h4>
      <Top props='Indian' />
    </div>
    <br />
    <div>
      <h4>The ranking of Chinese resturants based on city's population</h4>
      <Rank props='Indian' />
    </div>

  </>
  );
};

export default Query;
