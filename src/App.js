import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {MuiThemeProvider} from '@material-ui/core/styles'
import {createMuiTheme} from '@material-ui/core/styles'
//components
import Navbar from './components/Navbar'
//pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';

const theme= createMuiTheme({
  palette: {
    primary: {
      main: '#e65100',
      contrastText:'#fff'
    },
    secondary: {
      main: '#4a148c',
    }
  },
  typography:{
    useNextVariants: true
  }
})

class App extends Component{
  render(){
    return (
     <MuiThemeProvider theme={theme}>
        <div className="App">
        <Router>
        <Navbar/> 
        <div class='container'>
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/signup" component={signup}/>
          </Switch>
        </div>
        </Router>
      </div>
     </MuiThemeProvider>
    );

  }
  
}

export default App;
