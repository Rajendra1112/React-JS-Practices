import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Rajendra1112")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div>
        <img width={200} src={data.avatar_url} alt="github profile pic" />
      </div>

      <div className="bg-green-300 p-5 text-center text-3xl">
        Github followers: {data.followers}
      </div>
      <div className="bg-blue-300 p-5 text-center text-3xl">
        Github ID: {data.id}
      </div>
    </>
  );
}

export default Github;
