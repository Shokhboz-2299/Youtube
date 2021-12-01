import "./HomeBottom.scss";
import { NavLink } from "react-router-dom";

// images 
import  foodAndDrink from '../../Assets/Img/foodAndDrink.png';


// components 
import Left from "../../Lib/Svgs/Left";
import Right from "../../Lib/Svgs/Right";
import { useEffect, useState } from "react";


function HomeBottom() {
  const [videos, setVideos] = useState([]);
  useEffect (() => {
  fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(data => setVideos(data.slice(0,6)))
  }, []);
  return (

    <div className="homeBottom">
      <div className="homeBottom__header">
        <div className="homeBottom__header__left">
          <img src={foodAndDrink} alt="Food & Drink" width="50" height="50" />
          <NavLink className="homeBottom__header__left__NavLink" to="/channel">Food & Drink</NavLink>
          <p className="homeBottom__header__left__info">Recommended channel for you</p>
        </div>
        <div className="homeBottom__header__right">
          <button className="homeBottom__header__right__button">Subscribe 2.3m</button>
          <Left />
          <Right />
        </div>
      </div>
      <div className="homeBottom__main">
        {
          videos.length>0 &&   <ul className="foodAndDrink">
          {
            videos.map((video) => (
              <li key={video.id}>
                <NavLink className="foodAndDrinkVideo" to="/video">
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

export default HomeBottom;