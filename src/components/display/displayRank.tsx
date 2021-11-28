import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Rank(props: any) {
  console.log({props})
  const endpoint = "https://wuss8io572.execute-api.us-east-1.amazonaws.com/v1/rank";
  const url = `${endpoint}?term=${props.props}`;
  const [data, setData] = useState([])
  const getData = async() => {
    let response = await axios.get(url);
    console.log(response.data);
    setData(response.data)
    return response.data
  }

  useEffect(() => {
   getData();
  }, []);

  function renderData(args: any) {
    return (
      <ul>
        <li>city: {args.city}</li>
        <li>state: {args.state}</li>
        <li>restaurants/1000 poeple: {args.score}</li>
      </ul>
    )
  }

  return (
    <div style={{
		display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridRowGap: '5rem',
                gridColumnGap: '3rem',
                margin: '5rem'
		}}
                >
            {data.map(renderData)}
    </div>

  )
}

export default Rank;

