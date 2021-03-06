import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Sidemenu from '../components/Sidenav';
import LineChart from '../components/LineChart';
import Piechart from '../components/Piechart';
import Charts from '../components/Charts';
import { Row, Col  } from "react-bootstrap"
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';

const Analysis = () => {
    return (
        <div>
            <Router>
                <div className='row'>
                    <div className='col-7'>
                        <LineChart/>
                    <div className='col-1'>
                        <Charts/> 
                         
                    </div>
                    {/* <div className='col-3'> */}
                        <Piechart/> 
                    {/* </div> */}
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Analysis