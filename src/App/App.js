import DigitalClock from '../Components/DigitalClock/DigitalClock';
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
import './App.css';

const App = () => {
	  return (
      <div className="App">
	        <Navbar />
          	<DigitalClock />
	        <Sidebar />
	    </div>
	  );
}

export default App;
