import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/ui/Header'
import { Footer } from './components/ui/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Category } from './pages/Category'
import { Recipe } from './pages/Recipe'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category/:name" element={<Category />}></Route>
          <Route path="/meals/:id" element={<Recipe />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
