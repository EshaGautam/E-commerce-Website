import React from 'react'
import { Container,ListGroup,Button } from 'react-bootstrap';
import './HomeItems.css'
const tours = [
  {
    id:Math.random(),
    date: "JUL16",
    city: "DETROIT,MI",
    place: "DTE ENERGY MUSIC THEATRE",
  },

  {
        id:Math.random(),
    date: "JUL19",
    city: "TORONTO,ON",
    place: "BUDWEISER STAGE",
  },
  {
        id:Math.random(),
    date: "JUL 22",
    city: "BRISTOW, VA",
    place: "JIGGY LUBE LIVE",
  },

  {
        id:Math.random(),
    date: "JUL 29",
    city: "PHOENIX, AZ",
    place: "AK-CHIN PAVILION",
  },

  {
        id:Math.random(),
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    place: "T-MOBILE ARENA",
  },
  {
        id:Math.random(),
    date: "AUG 7",
    city: "CONCORD, CA",
    place: "CONCORD PAVILION",
  },
];

function HomeItems() {

    const tourlist = tours.map((tour) => (
      <Container className="tour">
        <ListGroup>
          <div className="tour-list">
            <ListGroup.Item key={tour.id}>
              <div className="tour-deets">
                <span>{tour.date}</span>
                <span>{tour.city}</span>
                <span>{tour.place}</span>
                <span>
                  <Button variant="primary" className="book-btn">
                    Book-Now
                  </Button>
                </span>
              </div>
            </ListGroup.Item>
          </div>
        </ListGroup>
      </Container>
    ));
  return (
    <div>
        <h1 className='head'>Tours</h1>
        {tourlist}
        </div>
  )
}

export default HomeItems