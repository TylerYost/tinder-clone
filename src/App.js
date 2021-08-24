import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    //BEM class convention
    <div className="app">
      <Header></Header>
      <Cards></Cards>
      <SwipeButtons></SwipeButtons>
      
      
      

    </div>
  );
}

export default App;
