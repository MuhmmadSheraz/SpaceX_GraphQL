import React, { useEffect } from "react";
import { UpcomingLaunchesListQuery } from "../../generated/graphql";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  rootcard: {
    maxWidth: 450,
    maxHeight: 1000,
  },
  media: {
    // height: 140,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
type card = {
  data: any;
};
const LaunchCard: React.FC<card> = ({ data }) => {
  const classes = useStyles();

  const goto = (a: string) => {
    window.open(a);
  };
  return (
    <Card className={classes.rootcard}>
      <CardActionArea>
        <CardMedia className={classes.media} title="Contemplative Reptile" />
        <img
          src={
            data && data.links.flickr_images[0]
              ? data.links.flickr_images[0]
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
          }
          alt="Missile"
          style={{
            maxWidth: "100%",
            maxHeight: "30vh",
            minHeight: "50vh",
            minWidth: "100%",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data?.mission_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Launch Year :{data?.launch_year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/MissionDetails/${data && data?.flight_number}`}>
          <Button size="small" color="primary">
            Details
          </Button>
        </Link>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            goto(
              data && data.links && data.links.wikipedia
                ? data.links.wikipedia
                : ""
            )
          }
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default LaunchCard;
