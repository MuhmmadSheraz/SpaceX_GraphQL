import React, { useEffect } from "react";
import { useUpcomingLaunchesListQuery } from "../../generated/graphql";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LaunchCard from "../LaunchCard";
const useStyles = makeStyles((theme) => ({
  rootcard: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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
const UpcomingMissions = () => {
  const classes = useStyles();
  const { data, error, loading } = useUpcomingLaunchesListQuery();

  if (loading) return <h2>Latest Missions Loading...</h2>;
 
  const date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <h1>Latest Launches By 2020</h1>
      <div style={{ justifyContent: "center", alignItems: "center " ,margin:"10px"}}>
        <Grid container spacing={5}>
          {data &&
            data.launches?.map((x) => {
              if (x && x.launch_year === year) {
                console.log(year);
                return (
                  <Grid item xs={12} sm ={4}>
                    <LaunchCard data={x} />
                  </Grid>
                );
              }
            })}
        </Grid>
      </div>
    </>
  );
};
const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
};

export default UpcomingMissions;
