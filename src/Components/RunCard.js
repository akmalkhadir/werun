import React, { Component } from 'react'
import {
  withStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'

const styles = {
  card: {
    maxWidth: 345,
    display: 'flex'
  },
  media: {
    objectFit: 'cover'
  }
}

class RunCard extends Component {
  state = {
    toRunDetails: false
  }

  handleClick = () => {
    this.setState({ toRunDetails: true })
  }

  render () {
    const { classes, run } = this.props
    const { handleClick } = this
    if (this.state.toRunDetails) {
      return <Redirect to={{
      pathname: `/runs/${run.id}`,
      state: { run: run }
      }} />
    }
    return (
      <Card className={classes.card} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt={run.name}
            className={classes.media}
            height='140'
            image='https://handluggageonly.co.uk/wp-content/uploads/2015/08/hr2_TOMTER_1110_VU_3871.jpg'
            title={run.name}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {run.name}
            </Typography>
            <Typography component='p'>{run.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default withStyles(styles)(RunCard)
