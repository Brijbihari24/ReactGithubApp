import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Axios from "axios";

const Repos = ({ repos_url }) => {
  //stp1. set repos and set its state empty array
  const [repos, setRepos] = useState([]);

  //stp2. fetch data from API using async await and then update the repos value
  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  //stp3. we don't call fetchData method directly first we set the breakpoint like in this case [repos_url]
  // once we get the get the repos_url we call the fetchData method then it updates the data in setRepos

  //stp3.2. useEffect hook works and looks like a method with a arrow fxn and a triggger point
  // it helps us avoid the use of react life cycle method and complete our task easily

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.descripiton}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
