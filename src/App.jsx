import './App.css';
import Destinations from './Components/Destinations/Destinations';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Subscription from './Components/Subscription/Subscription';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Destinations />
      <Services />
      <Subscription />
    </div>
  );
}

export default App;
