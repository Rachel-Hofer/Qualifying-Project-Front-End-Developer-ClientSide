import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class EditStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            phoneNumber: '',
            color: '',
            birthday: '',
            email: '',
            file: ''
        }
    }

    componentWillMount() {
        const { params } = this.props.match;
        axios.get(`http://localhost:5000/api/staff/${params.id}`)

            .then((response) => {
                console.log("RESPONSE.DATA", response.data)
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    age: response.data.age,
                    phoneNumber: response.data.phoneNumber,
                    color: response.data.color,
                    birthday: response.data.birthday,
                    email: response.data.email,
                    file: response.data.file
                })
            }).catch(() => {

            })
    }

    handleFormSubmit = (event) => {
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const age = this.state.age;
        const phoneNumber = this.state.phoneNumber;
        const color = this.state.color;
        const birthday = this.state.birthday;
        const email = this.state.email;
        const file = this.state.file

        event.preventDefault();

        axios.put(`http://localhost:5000/api/staff/${this.props.theStaff._id}`, { firstName, lastName, age, phoneNumber, color, birthday, email, file })
            .then(() => {
                this.props.listAllStaff();

                this.props.history.push('/all-staff');
            })
            .catch(error => console.log(error))
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleChangePhoneNumber = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    handleChangeColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    handleChangeBirthday = (event) => {
        this.setState({
            birthday: event.target.value
        })
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleFileChange(e) {
        e.preventDefault()
        this.setState({
            file: e.target.files[0]
        }, () => {
            console.log("THIS IS HANDLE FILE CHANGE", this.state)
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <hr />
                <h3>Edit form</h3>
                <Form className="employeeForm" onSubmit={this.handleFormSubmit}>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleFirstName">First Name </Label>
                                <Input value={this.state.firstName} onChange={e => this.handleChangeFirstName(e)} type="text" name="firstName" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="examplePassword">Last Name </Label>
                                <Input value={this.state.lastName} onChange={e => this.handleChangeLastName(e)} type="text" name="lastName" required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleAge">Age </Label>
                                <Input value={this.state.age} onChange={e => this.handleChangeAge(e)} type="text" name="age" />
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleCity">Phone Number </Label>
                                <Input value={this.state.phoneNumber} onChange={e => this.handleChangePhoneNumber(e)} type="text" name="phoneNumber" required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleText">Favorite Color </Label>
                                <Input value={this.state.color} onChange={e => this.handleChangeColor(e)} type="text" name="color" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleState">Birthday </Label>
                                <Input value={this.state.birthday} onChange={e => this.handleChangeBirthday(e)} type="text" name="birthday" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleEmail">E-mail </Label>
                                <Input value={this.state.email} onChange={e => this.handleChangeEmail(e)} type="text" name="email" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="theRows">
                        <Label for="exampleFile">Image</Label>
                        <img width="100px" alt="Staff Head Shot" src={this.state.file}></img>
                        <Input onChange={e => this.handleFileChange(e)} type="file" name="file" id="exampleFile" />
                    </FormGroup>

                    <Input type="submit" value="Create" />
                </Form>

            </div>
        )
    }
}

export default EditStaff;