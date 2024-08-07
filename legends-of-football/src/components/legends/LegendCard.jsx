import React from 'react'
import Card from"react-bootstrap/Card"
import Col from"react-bootstrap/Col"
// import data from"../../helpers/data"

const LegendCard = ({name,img,statistics,official_career}) => {
  return (
    <Col>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <ul>
        {
           data.statistics.map((item)=>(
                <li>{item}</li>
            ))
        }
      </ul>
     
      
    </Card.Body>
  </Card>
  </Col>
  )
}

export default LegendCard