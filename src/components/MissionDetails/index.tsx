import React, { useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import "./missiondetails.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { useMissionInfoQuery } from "../../generated/graphql";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

interface ParamTypes {
  slug: string;
}
const MissionDetails = () => {
  const { slug } = useParams<ParamTypes>();
  const { data, loading, error } = useMissionInfoQuery({
    variables: { id: String(slug) },
  });
  console.log("data===>", data);
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };
  if (loading) return <h1 className="loading">Loading... </h1>;
  return (
    <div className="detailWrapper">
      <div className="subWrapper">
        {" "}
        <div className="Intro_Wrapper">
          <span className="text_info">
            Mission Name: {data && data.launch?.mission_name}
          </span>
          <span className="text_info">
            Launch Successs:
            {data && data.launch?.launch_success ? (
              <span style={{ color: "green" }}> Successful</span>
            ) : (
              <span style={{ color: "red" }}> Unsuccessful</span>
            )}
          </span>
          <span className="text_info">
            Launch Year: {data && data.launch?.launch_year}
          </span>
          ,{" "}
          <span className="text_info">
            Launch Date: {data && data.launch?.launch_date_local}
          </span>
        </div>
      </div>
      <div className="imagesWrapper">
        <Grid container className={classes.root} spacing={5}>
          {data &&
            data.launch?.links &&
            data.launch?.links.flickr_images?.map((x) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  {" "}
                  <img
                    src={x ? x : ""}
                    className="fullImages"
                    alt="mission Images"
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default MissionDetails;
