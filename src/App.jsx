
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Channel from './pages/Channel/Channel';
import Video from './pages/Video/Video';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/channel" component={Channel} />
      <Route path="/video" component={Video} />
      <Route><div className="notFound"><Sidebar /><h2 className="notFound__topilmadi">Bu sahifa uchun dizayn chizilmagan</h2></div></Route>
      </Switch>
    </div>
  );
}

export default App;
