import "./ChannelBottom.scss";
import { NavLink } from "react-router-dom";



// components 
import Left from "../../Lib/Svgs/Left";
import Right from "../../Lib/Svgs/Right";
import { useEffect, useState } from "react";


function ChannelBottom() {
  const [videos, setVideos] = useState([]);
  useEffect (() => {
  fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(data => setVideos(data.slice(0,6)))
  }, []);
  return (

    <div className="channelBottom">
      <div className="channelBottom__header">
        <div className="channelBottom__header__left">
          <NavLink className="channelBottom__header__left__NavLink" to="/channel">Margaret Phelps videos</NavLink>
        </div>
        <div className="channelBottom__header__right">
          <Left />
          <Right />
        </div>
      </div>
      <div className="channelBottom__main">
        {
          videos.length>0 &&   <ul className="channelBottom__list">
          {
            videos.map((video) => (
              <li key={video.id}>
                <NavLink className="channelBottom__list__video" to="/video">
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

export default ChannelBottom;