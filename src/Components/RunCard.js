import React, { Component } from 'react'
import {
  withStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Slide,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    objectFit: 'cover'
  },
  button: {
    margin: theme.spacing.unit
  }
})

class RunCard extends Component {
  state = {
    toRunDetails: false
  }

  handleClick = () => {
    this.setState({ toRunDetails: true })
  }

  handleLinkClick = props => (
    <Link
      to={{
        pathname: `/runs/${this.props.run.id}`,
        state: {
          run: this.props.run
        }
      }}
      {...props}
    />
  )

  render () {
    const { classes, run } = this.props
    const { handleLinkClick } = this

    return (
      <Slide direction='right' in mountOnEnter unmountOnExit timeout={500}>
      <Card className={classes.card}>
        <CardActionArea component={handleLinkClick}>
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
      </Slide>
    )
  }
}

export default withStyles(styles)(RunCard)
