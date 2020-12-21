import gql from "graphql-tag";
export const MISSION_INFO = gql`
  query MissionInfo($id: String!) {
    launch(id: $id) {
      links {
        flickr_images
      }
      mission_name
      mission_id
      details
      launch_site {
        site_name
      }
      launch_date_local
      upcoming
      launch_success
      launch_year
    }
  }
`;
