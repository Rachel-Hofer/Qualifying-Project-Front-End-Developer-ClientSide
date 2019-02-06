import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class StaffList extends Component {

    constructor() {
        super();
        this.state = { listOfStaff: [] };
    }

    getAllStaff = () => {
        axios.get(`http://localhost:5000/api/all-staff`)
            .then(responseFromApi => {
                this.setState({
                    listOfStaff: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getAllStaff();
    }

    render() {
        return (
            <div>
                <div className="StaffList">
                    {this.state.listOfStaff.map((staff, index) => {
                        return (
                            <div key={staff._id}>
                                <Link to={`/staff/${staff._id}`}>
                                    <h3>{staff.firstName} {staff.lastName}</h3>
                                </Link>
                                <p>{staff.phoneNumber} </p>
                            </div>
                        )
                    })
                    }
                </div>
                {/* <div>
                    <AddProject getData={() => this.getAllStaff()} />
                </div> */}
            </div>
        )
    }
}

export default StaffList;