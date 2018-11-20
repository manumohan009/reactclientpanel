import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '123',
        firstName: 'Manu',
        lastName: 'Mohan',
        email: 'manu@gmail.com',
        phone: '123123123',
        balance: '100 '
      },
      {
        id: '123',
        firstName: 'Athira',
        lastName: 'K',
        email: 'athira@gmail.com',
        phone: '123123123',
        balance: '50 '
      }
    ];

    if (clients) {
      return (
        <div>
          <div className='row'>
            <div className='col-md-6'>
              <h2>
                <i className='fas fa-users' />
                Clients
              </h2>
            </div>
            <div className='col-md-6' />
          </div>
          <table className='table table-striped'>
            <thead className='thead inverse'>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.key}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>Rs {parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className='btn btn-secondary btn-sm'
                    >
                      <i className='fas fa-arrow-circle-right' /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>Clients</h1>
      </div>
    );
  }
}
export default Clients;
