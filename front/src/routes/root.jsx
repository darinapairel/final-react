import App from '../App'

import { Routes, Route } from "react-router-dom";

export default function Root() {
  return (
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>


  )
}