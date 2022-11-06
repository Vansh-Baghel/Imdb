import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar_MovieTypes/NavBar";
import MovieDetails from "./Components/Movie_Details/MovieDetails";
import MoviesList from "./Components/List_Of_Cards/MoviesList";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
            <Routes>
                <Route index path='/imdb' element={<Home />}></Route>
                <Route path="movie/:id" element={<MovieDetails />}></Route>
                <Route path="movies/:type" element={<MoviesList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
