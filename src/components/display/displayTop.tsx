import { Table, Badge } from 'react-bootstrap';

function Top(props: any) {

    console.log(typeof(props.props))
    const data = props.props;
    console.log(data)

    var cities: Array<string> = [];
    var states: Array<string> = [];
    var ratings: Array<string> = [];

    for (const k in data) {
      cities.push(data[k].metropolitan);
      states.push(data[k].state);
      ratings.push(data[k].score);
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
                    width: '50rem',
                    textAlign: 'center'
                  }}>
      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>Top</th>
            <th>Metropolitan</th>
            <th>Avg Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{cities[0]}</td>
            <td>{ratings[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{cities[1]}</td>
            <td>{ratings[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{cities[2]}</td>
            <td>{ratings[2]}</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div style={{
        width: '30rem',
        marginLeft: '3rem'
      }}>
      {cities[0] === undefined ? (<p></p>) :
      <Badge bg='success' style={{
        marginTop: '1.5rem'
      }}>
        <br />
        <br />
        <h5 style={{
          padding: '1rem'
        }}>Go pack your stuff, let's flight to {cities[0]}!</h5>
        <br />
        <br />
    </Badge>}
      </div>
    </div>
  )
}

export default Top;
