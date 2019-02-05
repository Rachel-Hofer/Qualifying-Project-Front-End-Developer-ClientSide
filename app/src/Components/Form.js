import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import staffServices from '../services/Services'
export default class Example extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: 0,
        phoneNumber: '',
        color: '',
        birthday: '',
        email: '',
        file: '',
    }

    staffServices = new staffServices();

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
        })
    }

    handleFileChange(e) {
        e.preventDefault()
        this.setState({
            file: e.target.files[0]
        }, () => {
            console.log(this.state)
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.staffServices.createStaff(this.state.firstName, this.state.lastName,
            this.state.age, this.state.phoneNumber, this.state.color, this.state.birthday,
            this.state.email, this.state.file)
            .then((response) => {
                console.log("<><><><><><><><><>", response)
                this.setState({

                    firstName: '',
                    lastName: '',
                    age: 0,
                    phoneNumber: '',
                    color: '',
                    birthday: '',
                    email: '',
                    file: '',

                })

                this.props.history.push('/all-staff')

            })
    }

    render() {

        return (

            <Form className="employeeForm" onSubmit={this.handleFormSubmit}>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleFirstName">First Name </Label>
                            <Input onChange={e => this.handleChange(e)} type="text" name="firstName" placeholder="Jane" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="examplePassword">Last Name </Label>
                            <Input onChange={e => this.handleChange(e)} type="text" name="lastName" placeholder="Doe" required />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleAge">Age </Label>
                            <Input onChange={e => this.handleChange(e)} type="number" name="age" placeholder="32" />
                        </FormGroup>
                    </Col>
                </Row>


                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleCity">Phone Number </Label>
                            <Input onChange={e => this.handleChange(e)} type="text" name="phoneNumber" placeholder="123-456-7890" required />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleText">Favorite Color </Label>
                            <Input onChange={e => this.handleChange(e)} type="text" name="color" placeholder="pink" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleState">Birthday </Label>
                            <Input onChange={e => this.handleChange(e)} type="text" name="birthday" placeholder="10-23-1986" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup className="theRows">
                            <Label for="exampleEmail">E-mail </Label>
                            <Input onChange={e => this.handleChange(e)} type="email" name="email" placeholder="Jane@me.com" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup className="theRows">
                    <Label for="exampleFile">File</Label>
                    <Input onChange={e => this.handleFileChange(e)} type="file" name="file" id="exampleFile" />
                </FormGroup>
                <Button>Create</Button>
            </Form>

        );
    }
}