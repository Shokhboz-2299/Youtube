import "./HomeMiddle.scss";
import { NavLink } from "react-router-dom";

// images 



// components 
import Left from "../../Lib/Svgs/Left";
import Right from "../../Lib/Svgs/Right";
import { useEffect, useState } from "react";


function HomeMiddle() {
  const [videos, setVideos] = useState([]);
  useEffect (() => {
  fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(data => setVideos(data.slice(0,3)))
  }, []);
  return (

    <div className="homeMiddle">
      <div className="homeMiddle__header">
        <div className="homeMiddle__header__left">
          <h2 className="homeMiddle__header__left__NavLink ">Recommended</h2>
        </div>
        <div className="homeMiddle__header__right">
          <Left />
          <Right />
        </div>
      </div>
      <div className="homeMiddle__main">
        {
          videos.length>0 &&   <ul className="recommendedList">
          {
            videos.map((video) => (
              <li key={video.id}>
                <NavLink className="recommended" to="/video">
                  <img src={video.thumbnailUrl} alt="thumbnailUrl"/>
                  <h3>{video.title.slice(0,25)}</h3>
                  <div>
                    <p>{Math.floor(Math.random()*100)} k views  ·  {Math.floor(Math.random()*10)} days ago</p>
                    <p>Gussie French</p>
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

export default HomeMiddle;