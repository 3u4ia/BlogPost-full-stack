import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import { CreateBlogPage } from './pages/CreateBlogPage.tsx'
import { Layout } from './layout/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<App/>} />
          <Route path='/create' element={<CreateBlogPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>



)
