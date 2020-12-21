import gql from "graphql-tag";

export const UPCOMING_LAUNCHES_LIST = gql`
  query UpcomingLaunchesList {
    launches {
      flight_number
      links {
        wikipedia
        flickr_images
      }
      mission_name
      mission_id
      upcoming
      launch_year
    }
  }
`;
