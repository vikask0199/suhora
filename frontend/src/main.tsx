import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import {  HashRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import ScrollToTop from './constant/ScrollToTop.tsx'
import './index.css'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <HashRouter >
      <ScrollToTop />
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </ChakraProvider>
    </HashRouter>
  </>

)
