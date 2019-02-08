import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import staffServices from '../../services/staffServices';

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

    staffServices = new staffServices();

    componentWillMount() {
        const { params } = this.props.match;
        axios.get(`http://localhost:5000/api/staff/${params.id}`)

            .then((response) => {

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

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {

        })
    }

    handleFileChange(e) {
        e.preventDefault()
        this.setState({
            file: e.target.files[0]
        }, () => {

        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.staffServices.editStaff(this.state.firstName, this.state.lastName, this.state.age, this.state.phoneNumber, this.state.color, this.state.birthday, this.state.email, this.state.file, this.props.match.params.id)
            .then((staffFromDB) => {
                console.log("STAFF FROM DB", staffFromDB)
                this.props.history.push(`/staff/${this.props.match.params.id}`)
            })
    }


    render() {

        return (
            <div>
                <p className="edit">Edit Employee Information</p>
                <Form className="employeeForm" onSubmit={this.handleFormSubmit}>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleFirstName">First Name </Label>
                                <Input value={this.state.firstName} onChange={e => this.handleChange(e)} type="text" name="firstName" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="examplePassword">Last Name </Label>
                                <Input value={this.state.lastName} onChange={e => this.handleChange(e)} type="text" name="lastName" required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleAge">Age </Label>
                                <Input value={this.state.age} onChange={e => this.handleChange(e)} type="text" name="age" />
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleCity">Phone Number </Label>
                                <Input value={this.state.phoneNumber} onChange={e => this.handleChange(e)} type="text" name="phoneNumber" required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleText">Favorite Color </Label>
                                <Input value={this.state.color} onChange={e => this.handleChange(e)} type="text" name="color" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleState">Birthday </Label>
                                <Input value={this.state.birthday} onChange={e => this.handleChange(e)} type="text" name="birthday" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <FormGroup className="theRows">
                                <Label for="exampleEmail">E-mail </Label>
                                <Input value={this.state.email} onChange={e => this.handleChange(e)} type="text" name="email" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="theRows">
                        <Label for="exampleFile">Image</Label>
                        {/* <img width="100px" alt="Staff Head Shot" src={this.state.file}></img> */}
                        <Input onChange={e => this.handleFileChange(e)} type="file" name="file" id="exampleFile" />
                    </FormGroup>

                    <div className="buttonHolder">
                        <button className="inputBtn btnExtra" type="submit" value="Save">Save</button>
                        <button className="btnExtra"><Link className="inputBtn" to={'/all-staff/'}>Cancel</Link></button>
                    </div>
                </Form>
            </div >
        )
    }
}

export default EditStaff;