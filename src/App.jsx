import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MicIcon from '@mui/icons-material/Mic';
// import Search from "./pages/Search";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path="/" index element={<Home />}></Route>
        <Route path="/search" index element = {<SearchPage></SearchPage>}>
      </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
