import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./components/homePage"
import BookMarks from "./components/bookMarks"
import "./styles.css";
function App() {
  return (
  <>
  <Router>
  <Routes>
    <Route exact path = "/" element={<HomePage/>}/>
    <Route exact path = "/bookmarks" element={<BookMarks/>}/>
    <Route/>
    <Route/>
  </Routes>
  </Router>
  </>
  )
}

export default App;