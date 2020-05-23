import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core'
import MSSlogoBlack from '../Images/MSS logo Black.png'
import axios from 'axios'
import {Link} from 'react-router-dom'
//MUI Stuff
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
const styles = (theme)=>(
    {
        ... theme
    }
)
class signup extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            confirmPassword:'',
            handle:'',
            loading:false,
            errors:{}
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
            this.setState({
                loading:true
            });
            const userData={
                email:this.state.email,
                password:this.state.password,
                confirmPassword:this.state.confirmPassword,
                handle:this.state.handle
            }
            axios.post('/signup', userData)
            .then( res=>{
                console.log(res.data);
                localStorage.setItem('FBIdToken',`Bearer ${res.data.token}`);
                this.setState({
                    loading:false
                });
                

                this.props.history.push('/');
            })
            .catch(err =>{
                this.setState({
                    errors:err.response.data,
                    loading:false
                });
            });
        }
        handleChange=(event)=>{
            this.setState({
                [event.target.name]:event.target.value
            });
        };
        test=()=> console.log(this.state.email);

    render() {
        const {classes}=this.props;
        
        const {errors, loading}= this.state;
        
        return (
            <Grid container className={classes.form}>
                <Grid item sm>
                
                </Grid>
               
               <Grid  item sm>
                    <img className={classes.image} alt="msslogo"src={MSSlogoBlack}></img>
                    <Typography variant="h2" className={classes.pageTitle}>
                        signup
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                   
                    <TextField id="email" 
                    name="email" 
                    type="email" 
                    label="Email" 
                    className={classes.textField}
                    helperText={errors.email}
                    error={errors.email ? true : false}
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    fullWidth></TextField>
                    
                    <TextField 
                    id="password" 
                    name="password" 
                    type="password" 
                    label="Password" 
                    className={classes.textField}
                    helperText={errors.password}
                    error={errors.password ? true:false}
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    fullWidth></TextField>

            <TextField id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    label="confirmPassword" 
                    className={classes.textField}
                    helperText={errors.confirmPassword} 
                    error={errors.confirmPassword ? true : false}
                    value={this.state.confirmPassword} 
                    onChange={this.handleChange} 
                    fullWidth></TextField>

            <TextField id="handle" 
                    name="handle" 
                    type="text" 
                    label="Handle" 
                    className={classes.textField}
                    helperText={errors.handle} 
                    error={errors.handle ? true : false}
                    value={this.state.handle} 
                    onChange={this.handleChange} 
                    fullWidth></TextField>
                    {this.test}
                    {errors.general && (
                        <Typography variant='body2' className={classes.customError}>
                            {errors.general}
                            
                        </Typography>
                    )}
                        <Button className={classes.button} type="submit" 
                        variant="contained" color="primary" disabled={loading}>signup
                        {
                            loading &&(
                                <CircularProgress className={classes.progress} size={30} ></CircularProgress>
                            )

                        }
                        </Button>
                        <br></br>
                        <small>Old? Login now.<Link to='/login'> click here</Link></small>
                        
                    </form>
                </Grid>
           
                <Grid item sm>
                    
                </Grid>
            </Grid>
        )
    }
}
signup.propTypes={
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(signup)
