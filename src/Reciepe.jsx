import React from 'react'
import { Card, Button , Badge, Accordion} from 'react-bootstrap';


function Reciepe({title, calories, image, ingredients}) {
    
    return (
        <>
            <Card style={{ width: '20rem' }} className="recipe" >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>

                        <Accordion defaultActiveKey="1">
                            <Card>
                        <Badge variant="danger">Calory: {calories}</Badge>{' '}

                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <Button variant="info" >Recipe</Button>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                       <ul>
                                        {ingredients.map(ingredient=>(
                                            
                                            <li><small>{ingredient.text}</small></li>
                                            )
                                            )}
                                        </ul> 
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        
                    </Card.Text>
        
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </>
    )
}

export default Reciepe
