import React,{Component} from 'react';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, useTheme, Theme} from '@material-ui/core/styles';

const usestyles = makeStyles(theme=>({
  // createStyles({
  //  root: {
  //   display: flex
  //  } ,
   link: { 
     margin: theme.spacing(1,2),
     color: 'white',
     //  backgroundColor: 'white',
     //  marginRight: 20,
    //  marginLeft: 20,
    // 
   },
    appBar: {
      height: 60,
      marginBottom: 50,
      background: 'blue',
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    title: {
      marginLeft: '1.1%' ,
      marginTop: '3.15%',
      flexGrow: 1,
    },
    button: {
      backgroundColor: 'white',
    }
  }));

const Navbar = () => {
      const classes = usestyles({});
        return(
          <div> 
          <AppBar position='static' color='default' className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.title}>
                       
            </Typography>
          <nav>
              <Link color='inherit' className={classes.link} href='/'>Home</Link>
              <Link color='secondary' className={classes.link} color='textPrimary' href='/charts'>Charts</Link>
              <Link className={classes.link} color='textPrimary' href='/table'>Table</Link>
          </nav>  
          </Toolbar>
          </AppBar>
          </div>
        )
  }

export default Navbar;