import "./Channel.scss";

// components 
import Sidebar from "../../Components/Sidebar/Sidebar";

// images 
import Banner from '../../Assets/Img/banner.png';
import ChannelMiddle from "../../Components/channelMiddle/channelMiddle";
import ChannelBottom from "../../Components/ChannelBottom/ChannelBottom";

function Channel() {
  return (
    <div>
      <div className="channelPage">
        <Sidebar />
        <div className="container">
          <img className="channelBanner" src={Banner} alt="channel's banner" width="1200" height="200" />
          <ChannelMiddle />
          <ChannelBottom />
        </div>
      </div>
    </div>
  )
}

export default Channel;