import React, { useCallback, useEffect, useState } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import "./HomeItems.css";
import FormInput from "../Form/FormInput";

function HomeItems() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(true);
  const [retryTimeoutId, setRetryTimeoutId] = useState(null);

  // Handle when movie added----------

  const handleMovieSubmit = async (movieObj) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://react-http-cfee1-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movieObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      fetchData()

      if (!response.ok) {
        throw new Error("Failed to add movie");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  
  // Fetching data from database------------

const fetchData = useCallback(async () => {
  setLoading(true);
  setError(null);
  try {
    let response = await fetch(
      "https://react-http-cfee1-default-rtdb.firebaseio.com/movies.json"
    );

    if (!response.ok) {
      throw new Error("Something went wrong, retrying...");
    }

    let movieData = await response.json();

    let movieIds = Object.keys(movieData);


    let transformedData = movieIds.map((id) => ({
      id,
      ...movieData[id],
    }));

    setMovies(transformedData)

  } catch (error) {
    setError(error.message);
    if (retrying) {
      setRetryTimeoutId(setTimeout(fetchData, 1000));
    }
  }


    setLoading(false);
  
}, []);

// using useEffect to make API call and fetch data from database when the component mounts---------
  useEffect(() => {
    if (retrying) {
      setTimeout(fetchData, 0);
    }
  
  }, [retrying]);


  // cancel making API call when buttons clicked 

  const handleCancel = () => {
    setRetrying(!retrying);
    clearTimeout(retryTimeoutId);
  };

  // deleting movie when the delete button clicked updating UI and database
 

const handleDeleteMovie = async (movie) => {
  try {
    setLoading(true);
    const response = await fetch(
      `https://react-http-cfee1-default-rtdb.firebaseio.com/movies/${movie.id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete movie");
    }

    setMovies((prevMovies) =>
      prevMovies.filter((prevMovie) => prevMovie.id !== movie.id)
    )
  }
   catch (error) {
    setError(error.message);
  } 
 
    setLoading(false);
  
};

  const movielist =
    movies.length > 0 &&
    movies.map((movie) => (
      <Container className="movie" key={movie.id}>
      
        <ListGroup>
          <div className="movie-list">
            <ListGroup.Item>
              <div className="movie-deets">
                <span>{movie.date}</span>
                <span>{movie.title}</span>
                <span>{movie.director}</span>
                <span>
                  <Button variant="primary" className="book-btn">
                    Book-Now
                  </Button>
                </span>
                <span>
                  <Button variant="outline-warning" className="dlt-btn" onClick={()=>handleDeleteMovie(movie) }>Delete</Button>
                </span>
              </div>
            </ListGroup.Item>
          </div>
        </ListGroup>
      </Container>
    ));
      console.log(movielist);

  let content;

  if (loading ) {
    content = <p className="onload">Loading...</p>;
  }
   else if (error) {
    content = (
      <p className="err-msg">
        {error}
        <Button
          variant="outline-warning"
          className="cancel-btn"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </p>
    );
   }
   else if (movies.length===0 || loading) {
  content = <p className="noloading">Found No Movies </p>;
  }
   else {
    content = movielist;
  }

  return (
    <div>
      <FormInput addMovie={handleMovieSubmit} />
      {content}
    </div>
  );
}

export default HomeItems;
