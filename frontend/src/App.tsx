
import { useColorMode } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import PublicOutlet from './outlet/PublicOutlet';
import AboutUs from './pages/AboutUsPage';
import AgriculturePage from './pages/AgriculturePage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import HydrologyPage from './pages/HydrologyPage';
import LancePage from './pages/LancePage';
import LandDeformationPage from './pages/LandDeformationPage';
import SIDPage from './pages/SIDPage';
import SpadePage from './pages/SpadePage';
import TerrainMappingPage from './pages/TerrainMappingPage';
import DefencePage from './pages/DefencePage';
import Disaster from './pages/Disaster';
import RenewableEnergyPage from './pages/RenewableEnergyPage';
import MiningPage from './pages/MiningPage';
import InfrastructurePage from './pages/InfrastructurePage';
import ForestPage from './pages/ForestPage';
import TeamPage from './pages/TeamPage';


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

          {/* product */}
          <Route path="spade" element={<SpadePage currentTheme={colorMode} />} />
          <Route path="lance" element={<LancePage currentTheme={colorMode} />} />
          <Route path="sid" element={<SIDPage currentTheme={colorMode} />} />

          {/* company */}
          <Route path="career" element={<CareerPage currentTheme={colorMode} />} />
          <Route path='aboutus' element={<AboutUs currentTheme={colorMode} />} />
          <Route path='our-team' element={<TeamPage />} />

          {/* services */}
          <Route path='product-hydrology' element={<HydrologyPage currentTheme={colorMode} />}></Route>
          <Route path='product-terrainmapping' element={<TerrainMappingPage currentTheme={colorMode} />}></Route>
          <Route path='land-deformation-monitoring' element={<LandDeformationPage currentTheme={colorMode} />}></Route>

          {/* Industries */} 
          <Route path="agriculture" element={<AgriculturePage currentTheme={colorMode} />} />
          <Route path='defence-and-intelligence' element={<DefencePage currentTheme={colorMode}/>} />
          <Route path='disaster-and-insurance' element={<Disaster currentTheme={colorMode}/>} />
          <Route path='renewable-energy' element={<RenewableEnergyPage currentTheme={colorMode}/>} />
          <Route path='mining' element={<MiningPage currentTheme={colorMode}/>} />
          <Route path='infrastructure' element={<InfrastructurePage currentTheme={colorMode}/>} />
          <Route path='forestry' element={<ForestPage currentTheme={colorMode}/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
