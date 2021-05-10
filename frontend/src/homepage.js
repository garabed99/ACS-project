import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        marginTop: theme.spacing(5),
        backgroundColor: theme.palette.primary.main,
        variant: 'rounded'
    },
    button: {
        margin: theme.spacing(4,3,0),
        padding: '15px'
    },
    text: {
        margin: theme.spacing(2, 0, 0.2),
    }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
        <Container component="main" >
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VideogameAssetIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.text}>
                    Minesweeper
                </Typography>
                <Typography component="h5">
                    Choose Dificulty:
                </Typography>
                <div>
                    <Button variant = "outlined"
                        className={classes.button} 
                        onClick={() => { window.location.href = "/minesweeper" }}>
                        Easy <br></br>[9x9]
                    </Button>

                    <Button variant = "outlined"
                        className={classes.button} 
                        onClick={() => { window.location.href = "/minesweeper" }}>
                        Medium <br></br>[16x16]
                    </Button>

                    <Button variant = "outlined"
                        className={classes.button} 
                        onClick={() => { window.location.href = "/minesweeper" }}>
                        Hard <br></br>[36x16]
                    </Button>

                </div>
                
            </div>
        </Container>
  );
}