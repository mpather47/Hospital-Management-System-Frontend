import React from 'react';
import './Login.css';
import axios from 'axios';
import { Button,Input,FormControl  } from '@material-ui/core';

class UpdateDetails extends React.Component{
    constructor(props){
        super(props)
         this.state={
        name:'',
        dob:'',
    }
    }
   
    handleChange = e => {
            this.setState({[e.target.name]:e.target.value})
        }

    onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:8080/person/read/',this.state)
         .then(response =>{
             console.log(response)
         }).catch(error=>{
            console.log(error)

         })

        
    }
    render() {
        const { name,dob} = this.state;
        return (
              <div className="container">
                 
                <FormControl style = {{margin: 50 }} onSubmit={this.onSubmitHandler}>
                    <Input type="text" style = {{width: 500}} name="name" placeholder="Full Name" className="form-control" value={name} onChange={this.handleChange}/>
                    <br></br>
                    <Input type="date" name="dob" placeholder="DOB"  className="form-control" value={dob} onChange={this.handleChange}/>
                    <br></br>
                    <Input type="text" name="dob" placeholder="DOB"  className="form-control" value={dob} onChange={this.handleChange}/>
                    <br></br>
                    <Input type="text" name="gender" placeholder="Gender" required onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="address1" placeholder="Address Line 1" required onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="address2" placeholder="Address Line 2" required onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="phone" placeholder="Phone Number" required onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="email" placeholder="Email Address" required onChange= {this.handleChange}/>
                   <br></br>
                    <Input type="password" name="password" placeholder="Password" required onChange= {this.handleChange}/>

                 
                </FormControl>
                <br></br>
                <FormControl>
                    
                <Button color="primary" type="submit" onClick={this} variant="contained">Update</Button>
                <br></br>
                    <Button color="primary" variant="contained">Cancel</Button>   
                    <br></br>    
                    </FormControl> 
                

              </div>  
          
      );
    }	
}

export default UpdateDetails;
