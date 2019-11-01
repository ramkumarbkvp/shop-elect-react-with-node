import React, { Component } from 'react';
import axios from 'axios';

import { Table } from './Components';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      headers: []
    }
  }
  componentDidMount() {
    axios.get('/contacts')
      .then(res => {
        this.constructData();
        this.setState({
          contacts: res.data.contacts
        });
      })
      .catch(err => {
        console.log('err', err);
      })
  }

  constructData = () => {
    const headers = [
      { id: 'contact_name', key: 'contact_name', numeric: false, disablePadding: false, label: 'NAME', link: true },
      { id: 'company_name', key: 'company_name', numeric: false, disablePadding: false, label: 'COMPANY NAME' },
      { id: 'email', key: 'email', numeric: false, disablePadding: false, label: 'EMAIL' },
      { id: 'phone', key: 'phone', numeric: false, disablePadding: false, label: 'WORK PHONE' },
      { id: 'gst_treatment', key: 'gst_treatment', numeric: false, disablePadding: false, label: 'GST TREATMENT' },
      { id: 'unused_credits_receivable_amount', key: 'unused_credits_receivable_amount', numeric: false, disablePadding: false, label: 'RECEIVABLES' },
      { id: 'unused_credits_payable_amount', key: 'unused_credits_payable_amount', numeric: false, disablePadding: false, label: 'PAYABLES' },
    ];
    this.setState({ headers });
  };

  render() {
    return (
      <div className="table-wrapper">
        <Table
          hoverKey={'contact_id'}
          selectAll={true}
          headers={this.state.headers}
          rowData={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
