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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>    
    <tr>
      <td>7</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>    
    <tr>
      <td>9</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>    <tr>
      <td>10</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>11</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default Tableview;
