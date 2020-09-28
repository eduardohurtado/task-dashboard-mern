import React from "react";
import { useQuery, gql } from "@apollo/client";

const DOWNLOAD_TASKS = gql`
  query {
    tasks {
      _id
      title
      description
      done
    }
  }
`;

function GQL() {
  const { loading, error, data } = useQuery(DOWNLOAD_TASKS);
  const greeting = "Hello Function Component!";

  if (loading) return console.log("...Is loading.");
  if (error) return console.error(error);
  console.log(data);

  return <div>{greeting}</div>;
}

export default GQL;
