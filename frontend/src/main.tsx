import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import ScrollToTop from './constant/ScrollToTop.tsx'
import './index.css'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter >
      <ScrollToTop />
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </>

)
