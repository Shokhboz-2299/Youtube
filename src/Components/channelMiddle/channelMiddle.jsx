import './channelMiddle.scss';
import { NavLink } from 'react-router-dom';

// images 
import Margaret from "../../Assets/Img/margaret.png";
import ChannelVideo from "../../Assets/Img/channelVideo.png";
import SearchImg from "../../Assets/Img/search.png";
import Viola from "../../Assets/Img/violet.png";
import Philip from "../../Assets/Img/philip.png";
import Flora from "../../Assets/Img/flora.png";

function ChannelMiddle() {
  return (
    <div className="channelMiddle">
      <div className="channelMiddle__header">
        <div className="channelMiddle__header__left">
          <img src={Margaret} alt="Margaret Phelps" width="80" height={80} />
          <div>
            <h3>Margaret Phelps</h3>
            <p>245K subscribed</p>
          </div>
        </div>
        <button>Subscribe 2.3m</button>
      </div>
      <div className="channelMiddle__main">
      <div className="channelMiddle__main__left">
        <nav>
          <ul>
            <li>
              <NavLink className="Active" to="/channel">Home</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/channel">Videos</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/channel">Playlists</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/channel">Channels</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/channel">Discussion</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/channel">About</NavLink>
            </li>
            <li>
              <button><img src={SearchImg} alt="Search" /></button>
            </li>
          </ul>
        </nav>
        <div className="channelMiddle__main__left__video">
          <NavLink className="homeVideo" to="/video">
            <img src={ChannelVideo} alt="ChannelVideo" width="540" height="250" />
            </NavLink>
          
          <div>
            <h3>Choosing The Best Audio Player Software For Your Computer</h3>
            <p>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
            <span>11k views  ·  6 months ago</span>
          </div>
        </div>
      </div>
      <div className="channelMiddle__main__right">
        <p>Recommended channel</p>
        <div>
          <img src={Flora} alt="Flora Benson" />
          <h4>Flora Benson</h4>
        </div>
        <div>
          <img src={Viola} alt="Violet Cobb" />
          <h4>Violet Cobb</h4>
        </div>
        <div>
          <img src={Philip} alt="Phillip Mullins" />
          <h4>Phillip Mullins</h4>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ChannelMiddle;