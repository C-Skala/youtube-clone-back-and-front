// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from 'react';

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import Youtube_API_Key from "./YT_AP_K.js";
import axios from "axios";

function App() {
  const [videos, setVideos] = useState([]);
  const [filterVideo, setFilterVideo] = useState('Pokemon Scarlet');


  async function fetchVideos(){
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${filterVideo}&key=${Youtube_API_Key}&part=snippet&type=video&maxResults=5`);
        console.log(response.data.items)
        setVideos(response.data.items)
        console.log({videos})
    
  }

  
 

  useEffect(() => {
    console.log('use effect');
    let mounted = true;
    if(mounted){
      fetchVideos();
      
    }
    return () => mounted = false;
  }, [])
  

  
  
  
  
  
  return (
    <div>
      <Navbar />
      <Routes>
        
        
        <Route
          path="/"
          element={
            // <PrivateRoute>
                <HomePage parentVideo = {videos} setVideo = {fetchVideos} searchVideo = {filterVideo}/>
            // </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/videoPage" element={<VideoPage />} parentVideo = {videos} setVideo = {fetchVideos}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
