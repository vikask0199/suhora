
import { useColorMode } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import PublicOutlet from './outlet/PublicOutlet';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import HydrologyPage from './pages/HydrologyPage';
import SpadePage from './pages/SpadePage';
import Agriculture from './pages/Agriculture';
import CareerPage from './pages/CareerPage';

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
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="hydrology" element={<HydrologyPage currentTheme={colorMode} />} />
          <Route path="spadepage" element={<SpadePage currentTheme={colorMode} />} />
          <Route path="agriculture" element={<Agriculture currentTheme={colorMode} />} />
          <Route path="career" element={<CareerPage currentTheme={colorMode}  />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
