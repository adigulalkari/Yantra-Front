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
import Inter2 from "./components/Inter2"
import Inter1 from "./components/Inter1"
import Addfriend from "./components/Addfriend"
import Respondrequest from "./components/Respondrequest"
import Allonfriend from './components/Allonfriend';
import Distress from "./components/Distress";

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
          <Route path="/inter2" element={<Inter2/>}/>
          <Route path="/inter1" element={<Inter1/>}/>
          <Route path="/addfriend" element={<Addfriend/>}/>
          <Route path="/respondrequest" element={<Respondrequest/>}/>
          <Route path="/allonfriend" element={<Allonfriend/>}/>
          <Route path="/distress" element={<Distress/>}/>
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


