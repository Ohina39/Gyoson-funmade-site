import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageMove from './PageMove';
import Header from './Header';
import HomePage from './pages/HomePage';
import URLPage from './pages/URLPage';
import Comment from './comment'
import './App.css'

function App() {
  return (
    <Router>
      <PageMove />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/URL" element={<URLPage />} />
      </Routes>
      <Comment />
    </Router>
  )
}

export default App