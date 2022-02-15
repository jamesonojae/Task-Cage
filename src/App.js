import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar/NavBar';
import Home from './components/Home';
import Trade from './components/Trade';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} exact/>
        <Route path="/trade" element={<Trade />} exact/>
      </Routes>

      {/*<Home />*/}
    </>
  );
}

export default App;
