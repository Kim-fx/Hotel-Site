import React from 'react'
import '../App.css';
import {Table} from 'react-bootstrap'

const Tableview = () => {
  return (
    <div>
      <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>booking date</th>
      <th>booking time</th>
      <th>checkout date</th>
      <th>checkout time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>02/01/20</td>
      <td>8:01am</td>
      <td>12/01/20</td>
      <td>7:30am</td>


    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>10/01/20</td>
      <td>9:15pm</td>
      <td>12/01/20</td>
      <td>6:30pm</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>12/01/20</td>
      <td>12:00pm</td>
      <td>15/01/20</td>
      <td>1:30pm</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>12/01/20</td>
      <td>7:30pm</td>
      <td>13/01/20</td>
      <td>6:59am</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>09/01/20</td>
      <td>12:00pm</td>
      <td>11/01/20</td>
      <td>12:pm</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>08/01/20</td>
      <td>8:20pm</td>
      <td>12/01/20</td>
      <td>7:01am</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>12/01/20</td>
      <td>6:00pm</td>
      <td>22/01/20</td>
      <td>6:15pm</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>11/01/20</td>
      <td>3:30pm</td>
      <td>15/01/20</td>
      <td>12:00pm</td>
    </tr>    
    <tr>
      <td>9</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>12/01/20</td>
      <td>4:15pm</td>
      <td>15/02/20</td>
      <td>9:20am</td>
    </tr>    
    <tr>
      <td>10</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>12/01/20</td>
      <td>8:32pm</td>
      <td>13/01/20</td>
      <td>11:50am</td>
    </tr>
    <tr>
      <td>11</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>12/01/20</td>
      <td>5:15pm</td>
      <td>13/01/20</td>
      <td>6:20am</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default Tableview;
