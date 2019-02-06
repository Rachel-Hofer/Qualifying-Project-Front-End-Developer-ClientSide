// import React, { Component } from 'react';
// import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

// class Form extends Component {

//     render() {

//         return (

//             <Form className="employeeForm" onSubmit={this.handleFormSubmit}>
//                 <Row form>
//                     <Col md={12}>
//                         <FormGroup className="theRows">
//                             <Label for="exampleFirstName">First Name </Label>
//                             <Input onChange={e => this.handleChange(e)} type="text" name="firstName" placeholder="Jane" />
//                         </FormGroup>
//                     </Col>
//                 </Row>
//                 <Row form>
//                     <Col md={12}>
//                         <FormGroup className="theRows">
//                             <Label for="examplePassword">Last Name </Label>
//                             <Input onChange={e => this.handleChange(e)} type="text" name="lastName" placeholder="Doe" required />
//                         </FormGroup>
//                     </Col>
//                 </Row>
//                 <Row form>
//                     <Col md={12}>
//                         <FormGroup className="theRows">
//                             <Label for="exampleAge">Age </Label>
//                             <Input onChange={e => this.handleChange(e)} type="text" name="age" placeholder="32" />
//                         </FormGroup>
//                     </Col>
//                 </Row>


//                 <Row form>
//                     <Col md={12}>
//                         <FormGroup className="theRows">
//                             <Label for="exampleCity">Phone Number </Label>
//                             <Input onChange={e => this.handleChange(e)} type="text" name="phoneNumber" placeholder="123-456-7890" required />
//                         </FormGroup>
//                     </Col>
//                 </Row>
//                 <Row form>
//                     <Col md={12}>
//                         <FormGroup className="theRows">
//                             <Label for="exampleText">Favorite Color </Label>
//                             <Input onChange={e => this.handleChange(e)} type="text" name="color" placeholder="pink" />
//                         </FormGroup>
//                     </Col>
//                 </Row>
//                 <Row form>
//                     <Col md={12}>
//                         <FormGroup className="theRows">
//                             <Label for="exampleState">Birthday </Label>
//                             <Input onChange={e => this.handleChange(e)} type="text" name="birthday" placeholder="10-23-1986" />
//                         </FormGroup>
//                     </Col>
//                 </Row>
//                 <Row form>
//                     <Col md={12}>
//                         <FormGroup className="theRows">
//                             <Label for="exampleEmail">E-mail </Label>
//                             <Input onChange={e => this.handleChange(e)} type="text" name="email" placeholder="Jane@me.com" />
//                         </FormGroup>
//                     </Col>
//                 </Row>
//                 <FormGroup className="theRows">
//                     <Label for="exampleFile">File</Label>
//                     <Input onChange={e => this.handleFileChange(e)} type="file" name="file" id="exampleFile" />
//                 </FormGroup>

//                 <Input type="submit" value="Create" />
//             </Form>

//         );
//     }
// }

// export default Form;