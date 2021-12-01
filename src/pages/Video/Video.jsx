import "./Video.scss";
import { NavLink } from "react-router-dom";

// images
import FoodAndDrink from "../../Assets/Img/foodAndDrink.png";

import NextVideos from "../../Components/NextVideos/NextVideos";
import Like from "../../Lib/Svgs/like";
import Dislike from "../../Lib/Svgs/Dislike";
import Share from "../../Lib/Svgs/Share";

function Video() {
  return (
    <div className="container">
      <div className="videoPage">
        <div className="videoPage__main">
          <iframe className="youtubeLink" width="727" height="409" src="https://www.youtube.com/embed/aCghEsTPhdA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <div className="video-info">
            <div className="video-info__title">
              <h2>Dude You Re Getting A Telescope</h2>
              <p>123k views</p>
            </div>
            <ul className="video-info__list">
              <li>
                <button><Like/><span>123k</span></button>
              </li>
              <li>
                <button><Dislike /><span>435k</span></button>
              </li>
              <li>
                <button><Share /><span>Share</span></button>
              </li>
              <li>
                <NavLink className="video-info__more" to="/video">...</NavLink>
              </li>
            </ul>
          </div>
          <hr className="hr-line" />
          <div className="videoPage__foodAndDrink">
            <img src={FoodAndDrink} alt="food and drink" />
            <div className="videoPage__foodAndDrink__main">
              <h3>Food & Drink</h3>
              <span>Published on 14 Jun 2019</span>
              <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
              <NavLink className="videoPage__foodAndDrink__main__link" to="/video">Show more</NavLink>
            </div>
            <button className="videoPage__foodAndDrink__btn">Subscribe 2.3m</button>
          </div>
        </div>
        <div>
          <NextVideos />
        </div>
      </div>
    </div>
  )
}

export default Video;