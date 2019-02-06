import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class StaffDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.getSingleStaff();
    }

    getSingleStaff = () => {
        const { params } = this.props.match;
        axios.get(`http://localhost:5000/api/staff/${params.id}`)
            .then(responseFromApi => {
                const theStaff = responseFromApi.data;
                this.setState(theStaff);
            })
            .catch((err) => {
                console.log(err)
            })
    }



    render() {
        console.log(this.state)

        return (
            <div>
                <img alt="Staff Head Shot" src={this.state.file}></img>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h3>Phone Number: {this.state.phoneNumber}</h3>
                <h3>E-mail Address: {this.state.email}</h3>
                <h4>Age: {this.state.age}</h4>
                <h4>Birthday: {this.state.birthday}</h4>
                <h5>Favorite Color: {this.state.color}</h5>

                <Link to={`/edit-staff/${this.state._id}`}>Edit Staff</Link>
                <Link to={'/all-staff'}>Back to all Staff</Link>

            </div>
        )
    }
}

export default StaffDetails;
