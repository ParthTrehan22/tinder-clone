import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Chats from './Chats'
import ChatScreen from './ChatScreen'
import Header from './Header';
import SwipeButtons from './SwipeButtons'
import TinderCards from './TinderCards';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path = "/chat/:person">
          <Header backButton = "/chat"></Header>
            <ChatScreen></ChatScreen>
          </Route>
          <Route path = "/chat">
          <Header backButton = "/"></Header>
            <Chats></Chats>
          </Route>
          <Route path = "/">
          <Header></Header>
          <TinderCards></TinderCards>
          <SwipeButtons></SwipeButtons>
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
