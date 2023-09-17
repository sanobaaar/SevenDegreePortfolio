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
            Carefully agreed and incorporated into the project program; the calendar of contractors, manufacturers, suppliers and transport companies. These arrangements are important for the client and the designer, who are ready at the right time with the final design and material specifications.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='consult-card'>
    <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Supply Logistics</Card.Title>
          <Card.Text>
            Procurement planning, fulfilment and logistics of materials and resources account for 45% to 70% of enterprise activity and absolutely critical to the delivery of a project on time and on budget. Seven Degree focuses on improving efficiency, productivity and collaboration among teams and payment control.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='consult-card'>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Contact with Tenants</Card.Title>
          <Card.Text>
             It is extremely important in his or her work to listen to the needs and demonstrate a proactive attitude. The stage of finishing the space, the number of people involved in the project increases, new ideas and last-minute changes appear, to which the Project Manager must react quickly.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </>
  );
}

export default ConsultCard;