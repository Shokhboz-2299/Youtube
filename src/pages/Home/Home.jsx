import './Home.scss';

import Sidebar from "../../Components/Sidebar/Sidebar";
import HomeTop from '../../Components/HomeTop/HomeTop';
import HomeMiddle from '../../Components/HomeMiddle/HomeMiddle';
import HomeBottom from '../../Components/HomeBottom/HomeBottom';


function Home() {
  return (
    <div className="homePage">
      <Sidebar />
      <div className="container">
      <div className="homeContent">
       <HomeTop/>
       <HomeMiddle/>
       <HomeBottom />
      </div>
      </div>
    
    </div>
  )
}

export default Home;