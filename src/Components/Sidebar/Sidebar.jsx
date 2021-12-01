import "./Sidebar.scss";

import { NavLink } from "react-router-dom";

// Svg images 
import HomeImg from "../../Lib/Svgs/HomeImg";
import Trending from "../../Lib/Svgs/tranding";
import Subs from "../../Lib/Svgs/subscription";
import Documents from "../../Lib/Svgs/documents";
import History from "../../Lib/Svgs/History";
import WatchLater from "../../Lib/Svgs/WatchLater";
import Favourites from "../../Lib/Svgs/Favourites";
import LikedVideos from "../../Lib/Svgs/LikedVideos";
import Music from "../../Lib/Svgs/Music";
import Games from "../../Lib/Svgs/Games";
import ShowMore from "../../Lib/Svgs/ShowMore";
import Setting from "../../Lib/Svgs/Setting";

// png images 
import Gussie from "../../Assets/Img/gussie.png";
import Nora from "../../Assets/Img/nora.png";
import Eunice from "../../Assets/Img/eunike.png";
import Belle from "../../Assets/Img/belle.png";
import Emma from "../../Assets/Img/emme.png";
import Leah from "../../Assets/Img/lech.png";

function Sidebar () {
  return (
    <div className="Sidebar">
      <ul className="Sidebar__topList">
        <li>
          <NavLink className="Sidebar__Navlink" activeClassName="Active" to="/"><HomeImg/> <span>Home</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/trending"><Trending/><span>Trending</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/subscriptions"><Subs /> <span>Subscriptions</span></NavLink>
        </li>
      </ul>


      {/* second list  */}

      <ul className="Sidebar__middleList">
        <li>
          <NavLink className="Sidebar__Navlink" to="/"><Documents/> <span>Library</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/"><History/><span>History</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/"><WatchLater /> <span>Watch later</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/"><Favourites/> <span>Favourites</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/"><LikedVideos/><span>Liked videos</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/"><Music /> <span>Music</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/"><Games/> <span>Games</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/"><ShowMore/><span>Show more</span></NavLink>
        </li>
      </ul>


      {/* Subscriptions  */}
      <h4 className="Sidebar__subs">Subscriptions</h4>
      <ul className="Sidebar__bottomList">
        <li>
        <NavLink className="Sidebar__Navlink" to="/channel"><img src={Gussie} alt="Gussie" width="26" height="26" /> <span>Gussie Singleton</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/channel"><img src={Nora} alt="Nora" width="26" height="26" /><span>Nora Francis</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/channel"><img src={Belle} alt="Belle" width="26" height="26" /> <span>Belle Briggs</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/channel"><img src={Eunice} alt="Eunice" width="26" height="26" /> <span>Eunice Cortez</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/channel"><img src={Emma} alt="Emma" width="26" height="26" /><span>Emma Hanson</span></NavLink>
        </li>
        <li>
          <NavLink className="Sidebar__Navlink" to="/channel"><img src={Leah} alt="Leah" width="26" height="26" /> <span>Leah Berry</span></NavLink>
        </li>
      </ul>
      <div className="Sidebar__setting "><NavLink className="Sidebar__Navlink" to="/"><Setting /> <span>Setting</span></NavLink></div>
    </div>
  )
}

export default Sidebar;