import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageMove from './PageMove';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import URLPage from './pages/URLPage';
import Comment from './comment'

import './App.css'

function App() {
  return (
    <div style={{ backgroundImage: 'url(./img/Gyosonbackpng.png)' ,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
 }}>
      <Header />
      <Router>
        <PageMove />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/URL" element={<URLPage />} />
        </Routes>
        <br />
        <br />
        <br />
      
      </Router>

      <div>
        <Comment />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        

      </div>
      <Footer />
    </div>
  )
}

export default App