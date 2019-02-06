import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class StaffList extends Component {

    constructor() {
        super();
        this.state = { listOfStaff: [] };
    }

    listAllStaff = () => {
        Axios.get(`http://localhost:5000/api/all-staff`)
            .then(responseFromApi => {
                this.setState({
                    listOfStaff: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.listAllStaff();
    }

    render() {

        return (
            <div className="StaffList">
                <div>
                    {this.state.listOfStaff.map((staff, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/staff/${staff._id}`}>
                                    <h3>{staff.firstName} {staff.lastName}</h3>
                                </Link>
                                <p>{staff.phoneNumber} </p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default StaffList;