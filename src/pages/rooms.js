import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HotelCards from '../components/Hotel-cards'
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rooms = () => {
    return (
        <div>
            <Router>
                    <div>
                        <HotelCards/>
                    </div>
                
            </Router>
        </div>
    )
}

export default Rooms