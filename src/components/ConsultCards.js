import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import img1 from "../assets/consultants/resource.jpg"
import img2 from "../assets/consultants/logistics.jpg"
import img3 from "../assets/consultants/tenant.jpg"

import "./ViewConsultStyles.css"

function ConsultCard() {
  return (
    <>
    <div className="resource-heading" style={{textAlign:'center'}}>
      <h1>How you can benefit?</h1>
    </div>
    <CardGroup className='card-group-consults'>
      <Card className='consult-card'>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Resource Planning</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='consult-card'>
    <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Supply Logistics</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='consult-card'>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Contact with Tenants</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </>
  );
}

export default ConsultCard;