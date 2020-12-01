import React from 'react';
import './UpdateDetails.css';
import { Button, Input, FormControl } from '@material-ui/core';
import axios from 'axios';

class UpdateDetails extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      person: [],
      address: [],
      contact: [],
      gender: [],
      personId: '7b8712e3-b7fd-4a3c-ad42-6cb1040edec9',
      contactId: 'bf0bdded-d5e3-49e6-86cc-7b06cd86e539',
      genderId: '1',
      addressId: 'a20d6953-2fb2-42ca-98e7-2647176cf461',
      name: '',
      dateOfBirth: '',
      genderType: '',
      address: '',
      homePhone: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) =>{
    const{name,value}= e.target
    this.setState({[name]:value})
}


  componentDidMount() {
    axios.get('http://localhost:8080/person/read/7b8712e3-b7fd-4a3c-ad42-6cb1040edec9')
      .then(res => {
        console.log(res)
        this.setState({ person: res.data })

      })




    axios.get('http://localhost:8080/address/read/a20d6953-2fb2-42ca-98e7-2647176cf461')
      .then(res => {
        console.log(res)
        this.setState({ address: res.data })

      })

    axios.get('http://localhost:8080/contact/read/bf0bdded-d5e3-49e6-86cc-7b06cd86e539')
      .then(res => {
        console.log(res)
        this.setState({ contact: res.data })

      })
    axios.get('http://localhost:8080/gender/read/1')    
      .then(res => {
        console.log(res)
        this.setState({ gender: res.data })

      })

    this.setState({
      name: this.state.person.name,
    });

  }


  onSubmitHandler = (e) => {

    axios.post(`http://localhost:8080/person/update`, this.state, {})
    axios.post(`http://localhost:8080/contact/update`, this.state, {})
    axios.post(`http://localhost:8080/address/update`, this.state, {})
    axios.post(`http://localhost:8080/gender/update`, this.state, {})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    const {name, dateOfBirth1, genderType1, homePhone1, email, address1 } = this.state;
    const { person, address, contact, gender } = this.state;

    return (

      <div className="container">

        <FormControl style={{ margin: 50 }} onSubmit={this.onSubmitHandler}>
          <h1>Update Information</h1>
          <Input type="text" style={{ width: 500 }} name="name" placeholder={person.name} value={name} className="form-control" onChange={this.handleChange} />

          <br></br>
          <Input type="date" name="dateOfBirth" placeholder={person.dateOfBirth} value={dateOfBirth1} className="form-control" onChange={this.handleChange} />
          <br></br>
          <Input type="text" name="genderType" placeholder={gender.genderType} value={genderType1} required onChange={this.handleChange} />
          <br></br>
          <Input type="text" name="address1" placeholder={address.address} value={address1} required onChange={this.handleChange} />
          <br></br>
          <Input type="text" name="phone" placeholder={contact.homePhone} value={homePhone1} required onChange={this.handleChange} />
          <br></br>
          <Input type="text" name="email" placeholder={contact.email} value={email} required onChange={this.handleChange} />
          <br></br>
          <Input type="password" name="password" placeholder="Password" required onChange={this.handleChange} />


        </FormControl>
        <br></br>
        <FormControl>

          <Button color="primary" type="submit" onClick={this.onSubmitHandler} variant="contained">Update</Button>
          <br></br>
          <Button color="primary" variant="contained">Cancel</Button>
          <br></br>

        </FormControl>


      </div>

    );
  }
}

export default UpdateDetails;
