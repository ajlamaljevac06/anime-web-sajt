
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/navbar'
import SideBar from './components/SideBar/sideBar'
import Home from './pages/Home/home';
import AnimePage from './pages/AnimePage/animePage'
import Manga from './pages/Manga/manga'
import Favorites from './pages/Favorites/favorites'
import AboutUs from './pages/AboutUs/aboutUs'

function App() {
 

  return (
    <>
    <Navbar/>
    <SideBar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/AnimePage" element={<AnimePage />} />
        <Route path="/Manga" element={<Manga />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path='/Favorites' element={<Favorites />} />
      </Routes>
      
    </>
  )
}

export default App
