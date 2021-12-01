import "./HomeTop.scss";
import { NavLink } from "react-router-dom";

// images 
import Dollie from "../../Assets/Img/dollie.png";


// components 
import Left from "../../Lib/Svgs/Left";
import Right from "../../Lib/Svgs/Right";
import { useEffect, useState } from "react";


function HomeTop() {
  const [videos, setVideos] = useState([]);
  useEffect (() => {
  fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(data => setVideos(data.slice(0,6)))
  }, []);
  return (

    <div className="homeTop">
      <div className="homeTop__header">
        <div className="homeTop__header__left">
          <img src={Dollie} alt="Dollie" width="50" height="50" />
          <NavLink className="homeTop__header__left__NavLink" to="/channel">Dollie Blair</NavLink>
        </div>
        <div className="homeTop__header__right">
          <Left />
          <Right />
        </div>
      </div>
      <div className="homeTop__main">
        {
          videos.length>0 &&   <ul className="dollieList">
          {
            videos.map((video) => (
              <li key={video.id}>
                <NavLink className="dollieVideo" to="/video">
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

export default HomeTop;