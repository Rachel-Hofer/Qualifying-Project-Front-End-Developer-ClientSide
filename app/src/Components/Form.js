import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (

            <Form className="employeeForm">
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleFirstName">First Name </Label>
                            <Input type="text" name="firstName" placeholder="Jane" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="examplePassword">Last Name </Label>
                            <Input type="text" name="lastName" placeholder="Doe" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleAge">Age </Label>
                            <Input type="number" name="age" placeholder="32" />
                        </FormGroup>
                    </Col>
                </Row>


                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleCity">Phone Number </Label>
                            <Input type="text" name="phoneNumber" placeholder="123-456-7890" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleText">Favorite Color </Label>
                            <Input type="text" name="text" placeholder="pink" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleState">Birthday </Label>
                            <Input type="text" name="birthday" placeholder="10-23-1986" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleEmail">E-mail </Label>
                            <Input type="email" name="email" placeholder="Jane@me.com" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup className="theRows">
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                </FormGroup>
                <Button>Sign in</Button>
            </Form>

        );
    }
}