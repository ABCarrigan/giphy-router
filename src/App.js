import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
// use 3 endpoints from Giphy API
//random,trending,search?

function App() {
  return (
    <Router>
      <nav>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path=""/>
        <Route path=""/>
        <Route path="*"/>
      </Routes>
    </Router>
  )
}

export default App;
