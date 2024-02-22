import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter >
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </>

)
