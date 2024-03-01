
import { useColorMode } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import PublicOutlet from './outlet/PublicOutlet';
import AboutUs from './pages/AboutUs';
import Agriculture from './pages/Agriculture';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import HydrologyPage from './pages/HydrologyPage';
import LancePage from './pages/LancePage';
import SIDPage from './pages/SIDPage';
import SpadePage from './pages/SpadePage';
import TerrainMappingPage from './pages/TerrainMappingPage';


function App() {
  // const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
  //     setCurrentTheme(savedTheme);
  //   } else {
  //     setCurrentTheme('light');
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   const newTheme = currentTheme === 'dark' ? 'dark' : 'light';
  //   console.log(newTheme)
  //   setCurrentTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  // };

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicOutlet toggleTheme={toggleColorMode} currentTheme={colorMode} />}>
          <Route index element={<HomePage currentTheme={colorMode} />} />
          <Route path="contact-us" element={<ContactPage currentTheme={colorMode} />} />
          <Route path="hydrology" element={<HydrologyPage currentTheme={colorMode} />} />
          <Route path="spadepage" element={<SpadePage currentTheme={colorMode} />} />
          <Route path="lancepage" element={<LancePage currentTheme={colorMode} />} />
          <Route path="sidpage" element={<SIDPage currentTheme={colorMode} />} />
          <Route path="agriculture" element={<Agriculture currentTheme={colorMode} />} />
          <Route path="career" element={<CareerPage currentTheme={colorMode} />} />
          <Route path='aboutus' element={<AboutUs currentTheme={colorMode} />} />
          <Route path='product-hydrology' element={<HydrologyPage currentTheme={colorMode} />}></Route>
          <Route path='product-terrainmapping' element={<TerrainMappingPage currentTheme={colorMode} />}></Route>
          <Route path='land-deformation-monitoring' element={<TerrainMappingPage currentTheme={colorMode} />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
