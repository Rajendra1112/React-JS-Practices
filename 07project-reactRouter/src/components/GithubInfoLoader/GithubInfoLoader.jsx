import React from "react";

async function GithubInfoLoader() {
  const response = await fetch("https://api.github.com/users/Rajendra1112"); // Fetch data
  const data = await response.json(); // Parse JSON
  console.log(data); // Log the data
  return data; // Return the parsed JSON data
}

export default GithubInfoLoader;
