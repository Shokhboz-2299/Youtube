import './Header.scss';
import { Link } from 'react-router-dom';

// images
import Hamburger from "../../Assets/Img/hamburger.png";
import Phone from "../../Assets/Img/phoneHeader.png";
import AppsHeader from "../../Assets/Img/apps.png";
import Notification from "../../Assets/Img/notification.png";
import UserHeader from "../../Assets/Img/userheader.png";

// svg es
import SiteLogo from '../../Lib/Svgs/siteLogo'; 


function Header () {
  return (
    <header className="siteHeader">
      <button className="siteHeader__btn"><img src={Hamburger} alt="Hamburger" width="20" height="17" /></button>
      <Link className="siteHeader__logo" to='/'> <SiteLogo /></Link>
      <input className="siteHeader__input" type="search" placeholder="Search" />
      <ul>
        <li>
          <Link to="/">
            <img src={Phone} alt="header list" />
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={AppsHeader} alt="header list" />
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={Notification} alt="header list" />
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={UserHeader} alt="header list" />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;