import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/ui/Header'
import { Preloader } from './components/ui/Preloader'
import { Footer } from './components/ui/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
