import React from 'react'
import { Button,FormControl,AppBar   } from '@material-ui/core';
import {Link} from 'react-router-dom';


class Starter extends React.Component{
    state={
        email:'',
        pwd:''
    }
    handleChange = (e) =>{
        const{name,value}= e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e)=>{
        
    }
    render(){
        return(
            <div>
                <div>
                 
                </div>
                <AppBar position="static"><h1>Login</h1></AppBar>
                <br></br>
                <FormControl>
                <Link to="/Login">
                    <Button  color="primary"variant="contained" onSubmit >User</Button>
                    </Link>
                    <br></br>
                    <Link to="/Employee">
                    <Button color="primary" variant="contained" onSubmit >Employee</Button>
                    </Link>
                    
                </FormControl>
            </div>
        )   
    }   
}
    export default Starter;


