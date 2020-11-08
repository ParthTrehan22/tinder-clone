import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'

import './App.css';

function App() {
  return (
    <div className="app">
        {/* Header */}
        <Header></Header>
        {/* TinderCards */}
        <TinderCards></TinderCards>
        {/* SwipeButtons*/}
        <SwipeButtons></SwipeButtons>

    </div>
  );
}

export default App;
