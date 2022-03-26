
import './App.css';
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import QusAns from './components/QusAns/QusAns';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <QusAns></QusAns>
    </div>
  );
}

export default App;
