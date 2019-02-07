import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import staffServices from '../../services/staffServices';

class AddStaff extends Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        phoneNumber: '',
        color: '',
        birthday: '',
        email: '',
        file: ''

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
            console.log("THIS IS HANDLE FILE CHANGE", this.state)
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.staffServices.createStaff(this.state.firstName, this.state.lastName, this.state.age, this.state.phoneNumber, this.state.color, this.state.birthday, this.state.email, this.state.file)
            .then((theStaff) => {

                console.log(theStaff)

                this.setState({

                    firstName: '',
                    lastName: '',
                    age: 0,
                    phoneNumber: '',
                    color: '',
                    birthday: '',
                    email: '',
                    file: ''
                })

                this.props.history.push('/all-staff')

            })
    }

    // allLetter = (e) => {
    //     console.log("LETTER, 1", e.target.value)

    //     var letters = /[a-zA-Z]+/g;

    //     if (e.target.value == (letters)) {
    //         return true;
    //     }
    //     else {
    //         console.log("LETTER, 2", e.target.value)
    //         alert('Please input alphabet characters only');
    //         return false;
    //     }
    // }

    // allNumbers = (e) => {
    //     console.log("NUMBER, 1", e.target.value)

    //     var numbers = /^[0-9]+$/;

    //     if (e.target.value === (numbers)) {
    //         return true;
    //     }
    //     else {
    //         console.log("NUMBER, 2", e.target.value)
    //         alert('Please input numerical characters only');
    //         return false;
    //     }
    // }

    // onKeyUp={e => this.allLetter(e)}

    render() {

        return (
            <div>
                <p className="edit">Add New Employee</p>

                <Form name="createForm" className="employeeForm" onSubmit={this.handleFormSubmit}>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleFirstName">First Name </Label>
                                <Input className="lettersOnly" onChange={e => this.handleChange(e)} type="text" name="firstName" placeholder="Jane" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleLastName">Last Name </Label>
                                <Input onChange={e => this.handleChange(e)} type="text" name="lastName" placeholder="Doe" required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleAge">Age </Label>
                                <Input onChange={e => this.handleChange(e)} type="text" name="age" placeholder="32" />
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
                                <Input onChange={e => this.handleChange(e)} type="text" name="email" placeholder="Jane@me.com" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="theRows">
                        <Label for="exampleFile">File</Label>
                        <Input onChange={e => this.handleFileChange(e)} type="file" name="file" id="exampleFile" />
                    </FormGroup>

                    <div className="buttonHolder">
                        <button className="inputBtn btnExtra" type="submit" value="Create">Create</button>
                        <button className="btnExtra"><Link className="inputBtn" to={'/all-staff/'}>Cancel</Link></button>
                    </div>
                    {/* <Input type="submit" value="Create" /> */}
                </Form>
            </div>
        );
    }
}

export default AddStaff;