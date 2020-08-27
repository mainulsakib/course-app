import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faChalkboardTeacher,faUsers} from '@fortawesome/free-solid-svg-icons'
import  './Courses.css'

const Courses = (props) => {
    const {name,description,students,price,instructor,image}=props.course
    return (
      <Card className="text-left card">
 <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Card.Text><small><FontAwesomeIcon icon={faChalkboardTeacher} /> :{instructor}</small></Card.Text>
    <Card.Text><strong>$ {price}</strong></Card.Text>
    <Button  onClick={()=>props.handleAddProduct(props.course) }variant="secondary"><FontAwesomeIcon icon={faPlus} /> Enroll Now</Button>
  </Card.Body>
  <Card.Footer><FontAwesomeIcon icon={faUsers} /> {students} students</Card.Footer>
</Card>

    
    );
};

export default Courses;