import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Form from './Components/Form';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Route component={Form} />
            </div>
        );
    }
}

export default Main;