import React, { Component } from 'react'

import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
  Grid,
  Avatar
} from '@material-ui/core'
import { DirectionsRun, LocationCity, Group } from '@material-ui/icons'

const styles = theme => ({
  root: {
    borderRadius: 0,
    minHeight: '80vh',
    margin: '10px'
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  avatar: {
    margin: 15,
    width: '40vw',
    height: '40vw'
  },
  icons: {
    fontSize: '48px',
    color: '#172a60'
  },
  stats: {
    marginTop: '2vh',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
})

class ProfilePage extends Component {
  render () {
    const { runner, classes } = this.props
    console.log('mello')
    return (
      <>
        <Card className={classes.root} elevation={1}>
          <CardContent>
            <CardActions className={classes.title}>
              <Avatar
                alt={runner.name}
                src={runner.image_url}
                className={classes.avatar}
                elevation={1}
              />
              <Typography variant='h4' color='primary'>
                {runner.name}
              </Typography>
              <Typography variant='body1' color='primary'>
                {runner.city}
              </Typography>
              <Typography variant='body2'>{runner.bio}</Typography>
            </CardActions>
            <CardActions>
              <Grid container spacing={16} justify='space-around'>
                <Grid item className={classes.actions}>
                  <Typography variant='subtitle2'>Runs Hosted</Typography>
                  <Typography variant='body1'>18</Typography>
                </Grid>
                <Grid item className={classes.actions}>
                  <Typography variant='subtitle2'>Runs Attended</Typography>
                  <Typography variant='body1'>126</Typography>
                </Grid>
              </Grid>
            </CardActions>
            <Divider />
            <CardActions className={classes.stats}>
              <Typography gutterBottom variant='h5'>
                Overview
              </Typography>
              <Grid container justify='space-around' spacing={24}>
                <Grid item className={classes.actions}>
                  <DirectionsRun className={classes.icons} />
                  <Typography>83 km</Typography>
                </Grid>
                <Grid item className={classes.actions}>
                  <LocationCity className={classes.icons} />
                  <Typography>5 cities</Typography>
                </Grid>
                <Grid item className={classes.actions}>
                  <Group className={classes.icons} />
                  <Typography>657 friends</Typography>
                </Grid>
              </Grid>
            </CardActions>
          </CardContent>
        </Card>
      </>
    )
  }
}

export default withStyles(styles)(ProfilePage)
