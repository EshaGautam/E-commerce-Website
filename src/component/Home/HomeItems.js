import React, { useState } from 'react'
import { Container,ListGroup,Button } from 'react-bootstrap';
import './HomeItems.css'

function HomeItems() {
  const [movies,setMovies]=useState([])
  const [loading,setLoading]=useState(false)

const handleMovieResponse=async()=>{
  setLoading(true);
 try {
    let response = await fetch("https://swapi.dev/api/films/");
    let movieData = await response.json();

    let transformedData = movieData.results.map((movie) => ({
      id: movie.episode_id,
      date: movie.release_date,
      title: movie.title,
      director:movie.director,
    }));

    setMovies(transformedData);
    setLoading(false)
  } 
  catch (error) {
    alert(`Error: ${error.message}`);
  }
};

    const movielist = movies.length>0 && movies.map((movie) => (
      <Container className="movie">
        <ListGroup>
          <div className="movie-list">
            <ListGroup.Item key={movie.id}>
              <div className="movie-deets">
                <span>{movie.date}</span>
                <span>{movie.title}</span>
                <span>{movie.director}</span>
                <span>
                  <Button variant="primary" className="book-btn">
                    Book-Now
                  </Button>
                </span>
              </div>
            </ListGroup.Item>
          </div>
        </ListGroup>
      </Container>
    ))
  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleMovieResponse}
        className="movie-btn"
      >
        Movie
      </Button>
      {loading && <p className="onload">Loading...</p> }
      {movielist}
    </div>
  );
}

export default HomeItems