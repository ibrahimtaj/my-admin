import React from 'react';
import { Col, Navbar, Button, Glyphicon } from 'react-bootstrap';

function Header(){
    return(
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#"><img /></Navbar.Brand>
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Button className="pull-right" bsStyle="success" bsSize="small">
                    Username
                </Button>
                <Col sm={12}>
                            Username
                        </Col>
            </Navbar>
        </div>
    );
}
export default Header;

