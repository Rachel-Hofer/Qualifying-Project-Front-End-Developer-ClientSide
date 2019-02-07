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

    listStaff = () => {
        console.log(this.state)
        let copy = this.state.filteredStaff;
        return copy.map((staff, index) => {
            return (
                <div key={index}>
                    <img width="200px" alt="headshot" src={staff.file}></img>
                    <Link to={`/staff/${staff._id}`}>
                        <h3>{staff.firstName} {staff.lastName}</h3>
                    </Link>
                    <p>{staff.phoneNumber} </p>
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
                console.log('this is singlestaff.seac', singleStaff[searchBy], searchBy)
                return singleStaff[searchBy].toLowerCase().includes(this.state.searchInput.toLowerCase());
            })
            console.log('newFilteredList', newFilteredList)
            this.setState({ filteredStaff: newFilteredList })
        })

    }


    render() {
        console.log(this.state)
        return (
            <div className="StaffList">
                <label>Search: </label>
                <input value={this.state.searchInput} onChange={e => this.handleSearch(e)}></input>
                <select value={this.state.selectValue} onChange={this.handleChange}  >
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="phoneNumber">Phone Number</option>
                </select>
                <div>

                    {this.listStaff()}
                </div>
            </div>
        )
    }
}

export default StaffList;



