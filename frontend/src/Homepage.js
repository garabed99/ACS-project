import React from 'react';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
// import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// import { spacing } from '@material-ui/system';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    avatar: {
        marginTop: theme.spacing(5),
        backgroundColor: theme.palette.primary.main,
        variant: 'rounded'
    },

    button1: {
        margin: theme.spacing(7,3,0),
        padding: '15px',
        backgroundColor: theme.palette.info.light,
        '&:hover': {
            backgroundColor: theme.palette.success.light
        }
    
    },

    button2: {
        margin: theme.spacing(7,3,0),
        padding: '15px',
        backgroundColor: theme.palette.info.light,
        '&:hover': {
            backgroundColor: theme.palette.warning.light
        }      
    },

    button3: {
        margin: theme.spacing(7,3,0),
        padding: '15px',
        backgroundColor: theme.palette.info.light,
        '&:hover': {
            backgroundColor: theme.palette.error.light
        }   
    },

    text: {
        margin: theme.spacing(2, 0, 0.2),
    },
    title: {
        alignItems: "left"
    }
}));

export default function Homepage(props) {
  const classes = useStyles();


  function handleClick(e){
    e.preventDefault();
    localStorage.removeItem('fname');
    window.location.href = "/";

}
  
  return (
        <Container component="main" >
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6"
                        style={{ marginRight:"auto" }}     
                    >
                    Welcome {JSON.parse(localStorage.getItem('fname'))}!
                    </Typography>

                    <Typography variant="h6"
                        style={{ margin:"auto" }} 
                        
                    >
                    Total win/played: win/played
                    </Typography>

                    <Typography variant="h6"
                        style={{ marginRight:"150px" }}
                        position= "left" 
                        
                    >
                    Best time per game
                    </Typography>

                    <Button  color="inherit" 
                        style={{ marginRight:"0" }}
                        onClick={ handleClick }
                    >
                        Sign Out
                    </Button>
                    
                </Toolbar>
            </AppBar>

            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <VideogameAssetIcon />
                </Avatar>

                <Typography component="h1" 
                    variant="h5" 
                    className={classes.text}>
                    Minesweeper
                </Typography>

                <Typography component="h5">
                    Choose Dificulty:
                </Typography>

                <div>
                    <Button variant = "outlined"
                        className={classes.button1} 
                        onClick={() => { props.history.push("/minesweeper/easy") }}
                        >
                            <Typography variant="subtitle2">
                            Easy <br></br>[9 x 9] <br></br> 10 mines
                            </Typography>
                    </Button>

                    <Button variant = "outlined"
                        className={classes.button2}
                        onClick={() => { props.history.push("/minesweeper/medium") }}
                        >
                        <Typography variant="subtitle2">
                            Medium <br></br>[16 x 16] <br></br> 40 mines
                        </Typography>
                    </Button>


                    <Button variant = "outlined"
                        className={classes.button3} 
                        onClick={() => { props.history.push("/minesweeper/hard") }}
                        >
                            <Typography variant="subtitle2">
                            Hard <br></br>[36 x 16] <br></br> 99 mines
                            </Typography>
                    </Button>

                </div>
                
            </div>
        </Container>
  );
}