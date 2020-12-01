import React from 'react';
import './Login.css';
import axios from 'axios';
import { Button,Input,FormControl,AppBar   } from '@material-ui/core';
import {Link} from 'react-router-dom';

class Register extends React.Component{
    constructor(props){
        super(props)
         this.state={
        name:'',
        dateOfBirth:'',
        gender: '',
        address: '',
        address2:'',
        postcode: '',
        cellphoneNo:'',
        homePhone: '',      
        email:'',
        password: '',
    }
    }
   
    handleChange = e => {
            this.setState({[e.target.name]:e.target.value})
        }

        

    onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(this.state);
         axios.post('http://localhost:8080/address/create/', this.state)
         axios.post('http://localhost:8080/person/create/',this.state)
        axios.post('http://localhost:8080/contact/create/',this.state)
         .then(response =>{
             console.log(response)
         }).catch(error=>{
            console.log(error)

         })

         

    }
    render() {
        const { name,dob,gender,address,postcode,cellphoneNo,homePhone,email,password} = this.state;
        return (
              <div className="container">
                  <AppBar color="primary" position="static">
                      <h1  style = {{flex: 1 }}>Register</h1>
                      </AppBar>
                <FormControl style = {{margin: 50 }} onSubmit={this.onSubmitHandler}>
                    <Input type="text" style = {{width: 500}} name="name" placeholder="Full Name" className="form-control" value={name} onChange={this.handleChange}/>
                    <br></br>
                    <Input type="date" name="dateOfBirth" placeholder="DOB"  className="form-control" value={dob} onChange={this.handleChange}/>
                    <br></br>
                    <Input type="text" name="gender" placeholder="Gender" value={gender}  className="form-control" onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="address" placeholder="Address"  className="form-control" value={address} onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="postcode" placeholder="Postal Code"  className="form-control" value={postcode} onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="cellphoneNo" placeholder="Phone Number"  className="form-control" value={cellphoneNo}  onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="homePhone" placeholder="Home phone"  className="form-control" value={homePhone}  onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="email" placeholder="Email Address"  className="form-control" value={email}  onChange= {this.handleChange}/>
                   <br></br>
                    <Input type="password" name="password" placeholder="Password"  className="form-control" value={password}  onChange= {this.handleChange}/>
                </FormControl>
                <br></br>
                <FormControl>
                    
                <Button color="primary" type="submit" onClick={this.onSubmitHandler} variant="contained">Register</Button>
                <br></br>
                    <Link to="/Login">
                    <Button color="primary" variant="contained">Cancel</Button>   
                    </Link>
                    <br></br>    
                    </FormControl> 
                

              </div>  
          
      );
    }	
}

export default Register;
