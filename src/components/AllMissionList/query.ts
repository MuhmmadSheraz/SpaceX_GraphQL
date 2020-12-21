import gql from "graphql-tag";

export const AlL_MISSIONS = gql`
  query allMissions {
    launches {
      mission_id
      flight_number
      mission_name
    }
  }
`;
