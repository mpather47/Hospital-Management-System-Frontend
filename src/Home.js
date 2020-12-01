import React from 'react'
import './Home.css';
import { Grid, Paper, FormLabel, Button, Input, FormControl, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
class Home extends React.Component {
    state = {
        email: '',
        pwd: '',
        person: [],
        address: [],
        contact: [],
        gender: [],
        personId: '7b8712e3-b7fd-4a3c-ad42-6cb1040edec9',
        name: '',
        dateOfBirth: '',
        genderType: '',
        address1: '',
        homePhone: '',
        email: '',
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {

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

    render() {

        const { person, address, contact, gender } = this.state;
        return (

            <div>

                <Paper >
                    <div>
                   <h1>Personal Information</h1>
                   <br></br>
                    <Grid containter style={{textAlign: 'left'}} >
                        <Grid item xs={6} sm={4}>
                            <FormLabel justify="flex-start">Name: {person.name}</FormLabel>
                        </Grid>
                        <br></br>
                        <Divider light />
                        <br></br>
                        <Grid item xs={6} sm={4}>
                            <FormLabel >Date of Birth: {person.dateOfBirth}</FormLabel>
                        </Grid>
                        <br></br>
                        <Divider light />
                        <br></br>
                        <Grid  item xs={6} sm={4}>
                            <FormLabel >Gender: Male</FormLabel>
                        </Grid>
                        <br></br>
                        <Divider light />
                        <br></br>
                        <Grid item xs={6} sm={4}>
                            <FormLabel justify="flex-start">Address: {address.address}</FormLabel>
                        </Grid>
                        <br></br>
                        <Divider light />
                        <br></br>
                        <Grid item xs={6} sm={4}>
                            <FormLabel justify="flex-start">Number: 0{contact.homePhone}</FormLabel>
                        </Grid>
                        <br></br>
                        <Divider light />
                        <br></br>
                        <Grid item xs={6} sm={3}>
                            <FormLabel justify="flex-start">Number:  {contact.email}</FormLabel>
                        </Grid>
                        <br></br>
                        <Divider light />
                        <br></br>
                    </Grid>


                    </div>





                </Paper>




            </div>
        )
    }
}
export default Home;


