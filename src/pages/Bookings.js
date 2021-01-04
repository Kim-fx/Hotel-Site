import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Sidemenu from '../components/Sidenav';
import Tableview from '../components/Tables';
import { Row, Col  } from "react-bootstrap"
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bookings = () => {
    return (
        <div>
            <Router>
                <div className='row'>
                    <div className='nav'>
                        <Sidemenu />
                    </div>
                    <div>
                        <Tableview/>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Bookings