import './App.css';
import Person from './components/Person';

function App() {

  return (
    <div className="App">
      <h1 className="header" data-testid="appName"> Identity Form App </h1>
      <Person />
      <p className="footer">Identity Form App &copy;All Rights Reserved | Saeed Kokash </p>  
    </div>
  );
}

export default App;
