import "./NextVideos.scss";
import { NavLink } from "react-router-dom";


// components 
import { useEffect, useState } from "react";

// images
import Autoplay from "../../Assets/Img/autoplay.png";


function NextVideos() {
  const [videos, setVideos] = useState([]);
  useEffect (() => {
  fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(data => setVideos(data.slice(0,6)))
  }, []);
  return (

    <div className="nextVideos">
      <div className="nextVideos__header">
        <div className="nextVideos__header__left">
          <h3>Next</h3>
        </div>
        <div className="nextVideos__header__right">
          <span>Autoplay</span>
          <img src={Autoplay} alt="Autoplay" />
        </div>
      </div>
      <div className="nextVideos__main">
        {
          videos.length>0 &&   <ul className="nextVideos__List">
          {
            videos.map((video) => (
              <li key={video.id}>
                <NavLink className="nextVideos__video" to="/video">
                  <img src={video.thumbnailUrl} alt="thumbnailUrl"/>
                  <h3>{video.title.slice(0,25)}</h3>
                  <div>
                    <p>{Math.floor(Math.random()*100)} k views  ·  {Math.floor(Math.random()*10)} days ago</p>
                    <p>Dollie Blair</p>
                  </div>
                  </NavLink>
                </li>
            ))
          }
        </ul>
        }
      
      </div>

    </div>
  )
}

export default NextVideos;