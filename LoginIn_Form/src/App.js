import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' exact
        element={<SignIn />} />
      <Route path='/Signup'
        element={<Signup />} />
      <Route path='/Home'
        element={<Home />} />
    </Routes>
  );
}

export default App;
