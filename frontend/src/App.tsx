
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicOutlet from './outlet/PublicOutlet';
import HomePage from './pages/HomePage';
import { useColorMode } from '@chakra-ui/react';

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

  const { colorMode , toggleColorMode } = useColorMode()

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicOutlet toggleTheme={toggleColorMode} currentTheme={colorMode} />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
