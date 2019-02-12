// Shows specific staff's details

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import staffServices from '../../services/staffServices';

class StaffDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    staffServices = new staffServices();

    componentDidMount() {
        this.getSingleStaff();
    }

    listAllStaff = () => {
        Axios.get(`http://localhost:5000/api/all-staff`)
            .then(responseFromApi => {
                console.log(responseFromApi.data, this.selectValue)
                this.setState({
                    listOfStaff: responseFromApi.data,
                    filteredStaff: responseFromApi.data
                })
            })
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

    deleteStaff = () => {
        this.staffServices.deleteStaff(this.state._id)
            .then((deletedStaff) => {
                console.log("deletedStaff", deletedStaff)
                this.props.history.push('/all-staff')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {

        var theStaffID = this.state._id;

        return (
            <div className="detailCardHolder">
                <div id="detailCard" className="card">
                    <img className="card-img-top" alt="Staff Head Shot" src={this.state.file}></img>
                    <p className="name">{this.state.firstName} {this.state.lastName}</p>
                    <hr></hr>
                    <p className="detailPTags number">Phone: {this.state.phoneNumber}</p>
                    <p className="detailPTags email">E-mail: {this.state.email}</p>
                    <p className="detailPTags age">Age: {this.state.age}</p>
                    <p className="detailPTags birthday">Birthday: {this.state.birthday}</p>
                    <p className="detailPTags color">Favorite Color: {this.state.color}</p>

                    <div className="buttonHolder">
                        <Link className="btnToDetails" to={`/edit-staff/${this.state._id}`}>Edit Staff</Link>
                        <button className="btnToDetails" onClick={this.deleteStaff}>Delete Staff</button>
                        {/* <Link className="btnExtraStyle" to={'/all-staff'}>Delete Staff</Link> */}
                    </div>
                </div>
                <Link className="btnExtra" to={'/all-staff'}>Back to Employee List</Link>
            </div>
        )
    }
}

export default StaffDetails;
