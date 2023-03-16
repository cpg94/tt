import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vulnerabilities from "./pages/Vulnerabilities";
import Vulnerability from "./pages/Vulnerability";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vulnerabilities />} />
        <Route path="/:id" element={<Vulnerability />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
