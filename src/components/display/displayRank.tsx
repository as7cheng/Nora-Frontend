import { Table, Badge } from 'react-bootstrap';

function Rank(props: any) {

    console.log(typeof(props.props))
    const data = props.props;
    console.log(data)

    var cities: Array<string> = [];
    var states: Array<string> = [];
    var ratings: Array<string> = [];

    for (const k in data) {
      cities.push(data[k].city);
      states.push(data[k].state);
      ratings.push("1 : " + data[k].score);
    }

    console.log(cities);
    console.log(states);
    console.log(ratings);

  return (
     <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)'
		}}
                >
    <div style={{
        width: '50rem'
		}}
                >
      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>Top</th>
            <th>City</th>
            <th>State</th>
            <th>Ratio of Per Restaurant : Population</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{cities[0]}</td>
            <td>{states[0]}</td>
            <td>{ratings[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{cities[1]}</td>
            <td>{states[1]}</td>
            <td>{ratings[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{cities[2]}</td>
            <td>{states[2]}</td>
            <td>{ratings[2]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{cities[3]}</td>
            <td>{states[3]}</td>
            <td>{ratings[3]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{cities[4]}</td>
            <td>{states[4]}</td>
            <td>{ratings[4]}</td>
          </tr>
        </tbody>
      </Table>
    </div>
 <div style={{
        width: '30rem',
        marginLeft: '3rem'
      }}>
      {cities[0] === undefined ? (<p></p>) :
      <Badge bg='info' text='dark' style={{
        marginTop: '4rem'
      }}>
        <br />
        <br />
        <h5 style={{
          padding: '1rem'
        }}>Amazing! Move to {cities[0]} or {cities[1]}?</h5>
        <br />
        <br />
    </Badge>}
      </div>

  </div>
  )
}

export default Rank;

