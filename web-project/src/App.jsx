import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import SideBar from './components/SideBar/sideBar';
import Home from './pages/Home/home';
import AnimePage from './pages/AnimePage/animePage';
import Manga from './pages/Manga/manga';
import Favorites from './pages/Favorites/favorites';
import AboutUs from './pages/AboutUs/aboutUs';
import { FavoritesProvider } from './context/context';  

function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AnimePage/:id" element={<AnimePage />} />
        <Route path="/Manga" element={<Manga />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
