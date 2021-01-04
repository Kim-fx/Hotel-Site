import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from "./pages/Home";
import Accounts from './pages/Accounts';
import Rooms from './pages/Rooms'
import Analysis from './pages/Analysis'
import Review from './pages/Review'
// import Tableview from './components/Tables';
// import Card from './components/Hotel-cards';
// import Charts from './components/Charts';
// import LineChart from './components/LineChart';
import { Row, Col  } from "react-bootstrap"
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Router>
        {/* <Accounts/> */}
        <Analysis/>
        {/* <Review/> */}
        {/* <Rooms/> */}
     </Router>
    </div>
  );
}

export default App;
