import React from "react";
//import { useEffect, useState } from "react";
//import useAuth from "../../hooks/useAuth";
//import Youtube_API_Key from "../../YT_AP_K.js"

//import axios from "axios";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  //const [user, token] = useAuth();


  //useEffect(() => {
    //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);
  

  return (
    <div>
       {props.parentVideo.map((videos)=> {
          return(
             <tr key = {videos.etag}>
              <td>{videos.snippet.title}</td>
              <td><img src = {videos.snippet.thumbnails.high.url}/></td>
              {/* <td>{videos.id.videoId}</td>
              <iframe id="ytplayer" type="text/html" width="640" height="360"
              src={`https://www.youtube.com/embed/${videos.id.videoId}?autoplay=1&origin=http://example.com`}
              frameBorder="0"></iframe>                       */}
             </tr>
           )
        })}
      
    </div>
  );
};

export default HomePage;
