import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { ListaProjetos } from './pages/ListaProjetos'

export function Router() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/projetos" element={<ListaProjetos />} />
    </Routes>
  )
}
