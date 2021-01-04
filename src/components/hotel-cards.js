import React from 'react'
import {Card, Button} from 'react-bootstrap'

const HotelCards = () => {
    return (
        <div>
            <h1>Rooms</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/10/16/08/39/bedroom-490779__340.jpg" />
                <Card.Body>
                    <Card.Title>Room 306</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HotelCards