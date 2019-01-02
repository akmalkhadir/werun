import React, { Component } from 'react'

import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
  Grid,
  IconButton,
  Avatar
} from '@material-ui/core'
import {
  LocationOn,
  Directions
} from '@material-ui/icons'

const styles = theme => ({
  root: {
    borderRadius: 0,
    height: '90vh'
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
  }
})

class ProfilePage extends Component {
  render () {
    const { runner, classes } = this.props
    console.log('mello')
    return (
      <>
        <Card className={classes.root} elevation={0}>
          <CardContent>
            <CardActions className={classes.title}>
              <Avatar
                alt={runner.name}
                src={runner.image_url}
                className={classes.avatar}
              />
              <Typography variant='h4' color='primary'>
                {runner.name}
              </Typography>
              <Typography variant='body2'>{runner.bio}</Typography>
            </CardActions>
            <CardActions>
              <Grid
                container
                spacing={16}
                justify='space-around'
              >
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
            <CardActions>
              <Grid container spacing={16}>
                <Grid item className={classes.actions}>
                  <LocationOn color='primary' />
                  <Typography>{runner.startLocation}</Typography>
                </Grid>
                <Grid item className={classes.actions}>
                  <LocationOn color='secondary' />
                  <Typography>{runner.endLocation}</Typography>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Directions />
                  </IconButton>
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
