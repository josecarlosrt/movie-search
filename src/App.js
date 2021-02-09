import React from "react";
import SearchMovies from "./components/SearchMovies"
import Navbar from './components/Navbar';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <main style={{marginTop: '64px'}}>
        <h1 className="title">Search Movies</h1>
        <SearchMovies />
        </main>
      </div>
    );
  }
}

export default App;
