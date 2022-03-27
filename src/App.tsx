import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/pages/Main-page/Main-page'

const App: FC = () => (
  <Routes>
    <Route index element={<MainPage />} />
  </Routes>
)

export default App
