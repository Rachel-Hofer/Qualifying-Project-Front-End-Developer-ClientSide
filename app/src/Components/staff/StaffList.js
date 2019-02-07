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
                console.log(responseFromApi.data, this.selectValue)
                this.setState({
                    listOfStaff: responseFromApi.data,
                    filteredStaff: responseFromApi.data

                })
            })
    }

    // sortByKey = (array, key) => {
    //     console.log("is this working?")
    //     return array.sort(function (a, b) {
    //         var x = a[key]; var y = b[key];
    //         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    //     });
    // }

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
        return copy.sort().map((staff, index) => {
            return (

                <div class="card" key={index}>
                    <img class="card-img-top" src={staff.file} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{staff.firstName} {staff.lastName}</h5>
                        <p class="card-text">Phone Number: {staff.phoneNumber}</p>
                        <Link className="btn btn-primary" to={`/staff/${staff._id}`}>Staff Details</Link>
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
            <div className="StaffList">
                <label>Search: </label>
                <input value={this.state.searchInput} onChange={e => this.handleSearch(e)}></input>
                <select value={this.state.selectValue} onChange={this.handleChange}  >
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="phoneNumber">Phone Number</option>
                </select>

                <div className="cardHolder">
                    {this.listFilteredStaff()}
                </div>
            </div>
        )
    }
}

export default StaffList;



