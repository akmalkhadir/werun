import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

const styles = {
  card: {
    maxWidth: 345,
    display: 'flex'
  },
  media: {
    objectFit: 'cover'
  }
}

function RunCard (props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Shoreditch 10K'
          className={classes.media}
          height='140'
          image='https://handluggageonly.co.uk/wp-content/uploads/2015/08/hr2_TOMTER_1110_VU_3871.jpg'
          title='Shoreditch 10K'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Shoreditch 10K
          </Typography>
          <Typography component='p'>
            The third edition of the original adidas City Run
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

RunCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RunCard)
