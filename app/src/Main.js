import React, { Component } from 'react';
import { Route } from "react-router-dom";
import AddStaff from './Components/staff/AddStaff';
import StaffList from './Components/staff/StaffList';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Route component={AddStaff} />
                <Route component={StaffList} />
            </div>
        );
    }
}

export default Main;