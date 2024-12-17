import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
function GitHub() {
  const { gitId } = useParams();

  const data = useLoaderData() //here data fetching using async function with useLoaderData hook
  
  // const [data, setData] = useState([]); //traditional way of fetching and storing data in a state
  // useEffect(() => {
  //   fetch("https://api.github.com/users/ChetanGaurkhede")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      {data ? (
        <div>
          My User Name : {data.name}
          <img src={data.avatar_url} alt="git_image" />
        </div>
      ) : (
        <h1>Lodding....</h1>
      )}
    </>
  );
}

export default GitHub;

export const gitHubInfoLoader = async () => { //useLoaderData Example
  const response = await fetch("https://api.github.com/users/ChetanGaurkhede");
  return response.json();
};
