import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import URLPage from './pages/URLPage';
import CommentsPage from './pages/CommentsPage';
import './App.css'

function App() {
  return (
    <div style={{ backgroundImage: 'url(./img/Gyosonbackpng.png)' ,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
 }}>
  <ChakraProvider>
    <Router>
      <Header />

        
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/URL" element={<URLPage />} />

          <Route path="/Comments" element={<CommentsPage />} />
        </Routes>
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
        

      <Footer />
    </Router>
    </ChakraProvider>
    </div>
  )
}

export default App