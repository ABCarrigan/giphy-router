import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import Search from './Pages/Search'
import './App.css'
// using 3 endpoints from Giphy API
//random,trending,search

function App() {
  return (
    <Router>
      <nav>
        <Link to="./">| Home |</Link>
        <Link to="./trending">| Trending |</Link>
        <Link to="./search">| Search |</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="*"/>
      </Routes>
    </Router>
  )
}

export default App;
