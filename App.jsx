import Home from './pages/Home'
import Admin from './pages/Admin'

// BrowserRouter dependency is intentionally avoided: lightweight path routing keeps this starter lean.
export default function App() {
  const path = window.location.pathname
  return path.startsWith('/admin') ? <Admin /> : <Home />
}