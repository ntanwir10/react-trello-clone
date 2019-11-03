import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const About = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Container>
                <Paper className={classes.about}>
                    <Typography component="h2" m='2' className={classes.heading}>
                        Features that are implementated in this application.
                    </Typography>
                    <Typography component="p" className={classes.para}>
                        1. User can create, delete and edit a to-do.
                    </Typography>
                    <Typography component="p" className={classes.para}>
                        2. They can also be able to mark a to-do done and vice-versa.
                    </Typography>
                    <Typography component="p" className={classes.para}>
                        3. They can alos create a to-do under a bucket. The user has the flexibility to name this bucket according to his/her choice.
                    </Typography>
                    <Typography component="p" className={classes.para}>
                        4. All the existing buckets the user has created should be given as options, next time the user tries to create a new bucket.
                    </Typography>
                </Paper>
            </Container >
        </Fragment >
    )
}

const useStyles = makeStyles(theme => ({
    about: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(3, 2),
        backgroundColor: '#cfe8fc',
    },
    heading: {
        margin: '30px 0'
    },
    para: {
        margin: '10px 0'
    }
}));

export default About;