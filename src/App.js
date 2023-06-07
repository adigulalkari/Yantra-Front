import './App.css';

import { BrowserRouter as Router,  
  Route,Routes,} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Intro from "./components/Intro";
import Landing from "./components/Landing";
import Info from "./components/Info"
import Chatbot from "./components/Chatbot"

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/chatbot" element={<Chatbot/>}/>
        {/* <Navbar/>
        <Header/>
        <Menu />
        <Row className="landing">
          <Col ><LeftSide /></Col>
          
          <Col ><RightSide /></Col>
        </Row> */}
      </Routes>
      
    </Router>
    
    </>  
  );
}

export default App;


