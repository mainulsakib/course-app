import React from 'react';
import './Header.css'

import {Navbar,Form,FormControl,Nav,Button} from 'react-bootstrap'

const Header = () => {
    return (
     <div >
            <div className="bannerSection">
            <h1>Learner's Hub</h1>
            <p><small>Learn Anything</small></p>
        </div>
        <div >
        <Navbar  className="link" >
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Course</Nav.Link>
      <Nav.Link href="#pricing">Enrolled Course</Nav.Link>
    </Navbar>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
            {/* <a href="Course">Course</a>
            <a href="Purchase">Purchase</a> */}
        </div>
     </div>
    );
};

export default Header;