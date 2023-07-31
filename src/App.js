import Topbar from './components/Topbar/Topbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Settings from './pages/Settings/Settings';
import Write from './pages/Write/Write';
import Single from './pages/Single/Single';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path ="/" exact element={<Home />} />
        <Route path ="/register" exact element={user ? <Home/> : <Register />} />
        <Route path ="/login" exact element={user ? <Home /> : <Login />} />
        <Route path ="/settings" exact element={user ? <Settings /> : <Register /> } />
        <Route path ="/write" exact element={user ? <Write /> : <Register /> } />
        <Route path ="/post/:postId" exact element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
