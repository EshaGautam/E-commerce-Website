import React, { useState } from 'react'
import { Container,ListGroup,Button } from 'react-bootstrap';
import './HomeItems.css'
// const tours = [
//   {
//     id:Math.random(),
//     date: "JUL16",
//     city: "DETROIT,MI",
//     place: "DTE ENERGY MUSIC THEATRE",
//   },

//   {
//         id:Math.random(),
//     date: "JUL19",
//     city: "TORONTO,ON",
//     place: "BUDWEISER STAGE",
//   },
//   {
//         id:Math.random(),
//     date: "JUL 22",
//     city: "BRISTOW, VA",
//     place: "JIGGY LUBE LIVE",
//   },

//   {
//         id:Math.random(),
//     date: "JUL 29",
//     city: "PHOENIX, AZ",
//     place: "AK-CHIN PAVILION",
//   },

//   {
//         id:Math.random(),
//     date: "AUG 2",
//     city: "LAS VEGAS, NV",
//     place: "T-MOBILE ARENA",
//   },
//   {
//         id:Math.random(),
//     date: "AUG 7",
//     city: "CONCORD, CA",
//     place: "CONCORD PAVILION",
//   },
// ];

function HomeItems() {
  const [movies,setMovies]=useState([])

const handleMovieResponse=async()=>{
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
  } 
  catch (error) {
    alert(`Error: ${error.message}`);
  }
};





    const movielist = movies.map((movie) => (
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
    ));
  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleMovieResponse}
        className="movie-btn"
      >
        Movie
      </Button>
     
      {movielist}
    </div>
  );
}

export default HomeItems