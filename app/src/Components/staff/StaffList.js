// Shows all staff

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class StaffList extends Component {

    constructor() {
        super();
        this.state = {
            listOfStaff: [],
            selectValue: 'firstName',
            searchInput: '',
            filteredStaff: []
        };
    }

    listAllStaff = () => {
        Axios.get(`http://localhost:5000/api/all-staff`)
            .then(responseFromApi => {
                responseFromApi.data.sort((function (a, b) {
                    if (a.firstName < b.firstName) { return -1; }
                    if (a.firstName > b.firstName) { return 1; }
                    return 0;
                }))
                this.setState({
                    listOfStaff: responseFromApi.data,
                    filteredStaff: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.listAllStaff();

    }

    handleChange = (e) => {
        this.setState({
            selectValue: e.target.value
        })
    }

    listFilteredStaff = () => {
        let copy = this.state.filteredStaff;
        return copy.map((staff, index) => {
            return (

                <div className="card" id="listCard" key={index}>
                    <img className="card-img-top" src={staff.file} alt="Staff Head Shot" />
                    <div className="card-body">
                        <p className="name">{staff.firstName} {staff.lastName}</p>
                        <p className="card-text phone">Phone: {staff.phoneNumber}</p>
                        <div className="btnHolder">
                            <Link className="btnToDetails" to={`/staff/${staff._id}`}>Details</Link>
                        </div>
                    </div>
                </div>
            )
        })
    }

    handleSearch = (e) => {
        this.setState({
            searchInput: e.target.value
        }, () => {
            let fullList = [...this.state.listOfStaff];
            let searchBy = this.state.selectValue;
            const newFilteredList = fullList.filter((singleStaff) => {

                return singleStaff[searchBy].toLowerCase().includes(this.state.searchInput.toLowerCase());
            })
            console.log('newFilteredList', newFilteredList)
            this.setState({ filteredStaff: newFilteredList })
        })
    }


    render() {

        return (
            <div className="StaffList" >

                <div className="search">
                    <label className="searchBarLabel">Search: </label>
                    <input className="searchBarValue" value={this.state.searchInput} onChange={e => this.handleSearch(e)}></input>
                    <select className="searchBarSelect" value={this.state.selectValue} onChange={this.handleChange}  >
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="phoneNumber">Phone Number</option>
                    </select>
                </div>
                <div className="createNew">
                    <Link className="btnToCreate" to={'/create-staff'}>Add New Employee</Link>
                </div>
                <div className="cardHolder">
                    {this.listFilteredStaff()}
                </div>
            </div>
        )
    }
}

export default StaffList;



