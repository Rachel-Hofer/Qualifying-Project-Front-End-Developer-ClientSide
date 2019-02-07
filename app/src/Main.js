import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import AddStaff from './Components/staff/AddStaff';
import StaffList from './Components/staff/StaffList';
import StaffDetail from './Components/staff/StaffDetail'
import EditStaff from './Components/staff/EditStaff'


class Main extends Component {
    render() {
        return (
            <div className="main">
                <header className="title">Employee Database</header>
                <Switch>
                    <Route exact path="/create-staff" component={AddStaff} />
                    <Route exact path="/all-staff" component={StaffList} />
                    <Route exact path="/staff/:id" component={StaffDetail} />
                    <Route exact path='/edit-staff/:id' component={EditStaff} />
                </Switch>
            </div>
        );
    }
}

export default Main;