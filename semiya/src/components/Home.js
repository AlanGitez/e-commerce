import React from "react";
import { useSelector } from "react-redux";


const Home = () => {
  const user = useSelector(state => state.user);
  return (
  
    <div class="container">
    <div class="row align-items-start">
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
    </div>
    <div class="row align-items-end">
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
    </div>

    {user.id ? <h1>ESTAS LOGGEADO PADRE</h1> : <h1> NO ESTAS LOGGEADO </h1>}

  </div>
    )
};

export default Home;
