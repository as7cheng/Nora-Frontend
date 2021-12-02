import { Button, Card } from 'react-bootstrap';

function BlogCard(props: any) {
  const data = props.props;
  return (
     <Card className = "card" border="dark" style={{ width: '40rem'}}>
       <Card.Header as='h6'><strong>{data.header}</strong></Card.Header>
       <Card.Img variant='top' src={data.image} style={{height:'10rem'}} />
       <Card.Body>
         <Card.Title as='h6'><strong>{data.title}</strong></Card.Title>
       </Card.Body>
       <Button variant="dark" href={data.url} target="_blank" size='sm'
      style={{
        marginLeft: '3.7rem',
        marginRight: '3.7rem'
      }}>
      See Content
      </Button>
     </Card>
  )
}

export default BlogCard;
