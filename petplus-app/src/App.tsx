import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from './templates/Index';
import { AboutAs } from './templates/aboutUs';
import { Planner } from './templates/planner';
import { Register } from './templates/register';
import { Session } from './templates/session';
import { User } from './templates/user';
function App (){
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Index />} /> 
          <Route path="/aboutAs" element={<AboutAs />} /> 
          <Route path="/planner" element={<Planner />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/session" element={<Session />} /> 
          <Route path="/user" element={<User />} /> 
        </Routes>
      </Router>
    
  )
}

export default App;

