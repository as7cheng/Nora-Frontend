import { Table } from 'react-bootstrap';

function Top(props: any) {

    console.log(typeof(props.props))
    const data = props.props;
    console.log(data)

    var cities: Array<string> = [];
    var states: Array<string> = [];
    var ratings: Array<string> = [];

    for (const k in data) {
      cities.push(data[k].city);
      states.push(data[k].state);
      ratings.push(data[k].score);
    }

    console.log(cities);
    console.log(states);
    console.log(ratings);



  return (
    <div style={{
        width: '70rem'
		}}
                >
      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>Top</th>
            <th>City</th>
            <th>State</th>
            <th>Avg Rating</th>
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

        </tbody>
      </Table>
    </div>
  )
}

export default Top;
