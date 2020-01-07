import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//MUI Stuff
import Appbar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'

class Navbar extends Component {
    render() {
        return (
            <Appbar>
                <Toolbar className='nav-container'>
                    <Button color='inherit' component={Link} to="/login">Login</Button>
                    <Button color='inherit' component={Link} to="/signup">Signup</Button>
                    <Button color='inherit' component={Link} to="/">Home</Button>
                </Toolbar>
            </Appbar>
        )
    }
}

export default Navbar;
