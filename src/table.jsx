import React, { Component } from 'react';
import './table.css'

class UserDetailTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyDetials: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ companyDetials: data });
      })
      .catch(error => {
        console.error('Getting Error:', error);
      });
    //   this.getUserDetails()
  }
  //another famous method is axios method the above one is easy way so i added 
  //but i am used axios in projext i just mention the call in bellow
//   getUserDetails = () =>{
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//       .then(data => {
//         this.setState({ companyDetials: data });
//       })
//       .catch(error => {
//         console.error('Getting Error:', error);
//       });
//   }


  render() {
    return (
      <div>
        <h1>Company Details Table</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>website Name</th>
              <th>Company Name</th>

            </tr>
          </thead>
          <tbody>
            {this.state.companyDetials.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address['suite'] + ', ' + user.address['street']  +  user.address['Gwenborough'] }</td>
                <td style={{whiteSpace: 'nowrap', width:'10%'}}>{user.phone}</td>
                <td style={{whiteSpace: 'nowrap', width:'20%'}}>{user.website}</td>
                <td style={{whiteSpace: 'nowrap', width:'20%'}}>{user.company['name']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserDetailTable;
