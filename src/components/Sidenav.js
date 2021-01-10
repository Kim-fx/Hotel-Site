import React, {Component} from 'react'
import {Sidenav, Icon, Toggle,Nav  } from "rsuite";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Sidemenu extends Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: '1'
      };
      this.handleToggle = this.handleToggle.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleToggle() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      const { expanded } = this.state;
  
      return (
        <div style={{ width: 250 }}>
          <Toggle onChange={this.handleToggle} checked={expanded} />
          <hr />
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={['3', '4']}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
          <Router>
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                  User Group
                </Nav.Item>
                <Nav.Item eventKey="3" icon={<Icon icon="table" />}>
                  <Link to="/Accounts">
                    <li>Accounts</li>
                  </Link>
                </Nav.Item>
                <Nav.Item eventKey="4" icon={<Icon icon="bed" />}>
                  <Link to="/Rooms">
                    Rooms
                  </Link>
                </Nav.Item>
                <Nav.Item eventKey="5" icon={<Icon icon="user-analysis" />}>
                  <Link to="/Analysis">
                    Analysis
                  </Link>
                </Nav.Item>
                <Nav.Item eventKey="6" icon={<Icon icon="commenting" />}>
                  <Link to="/Review">
                    Review
                  </Link>
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
            </Router> 
          </Sidenav>
        </div>
      );
    }
  }
  

  export default Sidemenu;