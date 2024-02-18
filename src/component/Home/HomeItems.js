import React, { useEffect, useState } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import "./HomeItems.css";

function HomeItems() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(null);
    const [retryTimeoutId, setRetryTimeoutId] = useState(null);


   
   const fetchData = async () => {
         setLoading(true);
     try {
       let response = await fetch("https://swapi.dev/api/films/");

       if (!response.ok) {
         throw new Error("Something went wrong, retrying...");
       }

       let movieData = await response.json();

       let transformedData = movieData.results.map((movie) => ({
         id: movie.episode_id,
         date: movie.release_date,
         title: movie.title,
         director: movie.director,
       }));
       setMovies(transformedData);
     } catch (error) {
       setError(error.message);
       if (retrying) {
         setRetryTimeoutId(setTimeout(fetchData, 5000));
       }
     }
     setLoading(false);
   };


   useEffect(() => {
     setError(null);
     if (retrying) {
       setTimeout(fetchData, 0);
     }
   }, [retrying]);



   const handleCancel = () => {
     setRetrying(!retrying);
     clearTimeout(retryTimeoutId);
     console.log("Retry cancelled");
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
               </div>
             </ListGroup.Item>
           </div>
         </ListGroup>
       </Container>
     ));

   return (
     <div>
       <Button
         type="button"
         variant="secondary"
         onClick={() => setRetrying(true)}
         className="movie-btn"
       >
         Movie
       </Button>
       {loading && <p className="onload">Loading...</p>}
       {!loading && movies.length === 0 && (
         <p className="noloading">Found No Movies </p>
       )}
       {!loading && error && (
         <p className="err-msg">
           {error}
           <Button
             variant="outline-warning"
             className="cance-btn"
             onClick={handleCancel}
           >
             Cancel
           </Button>
         </p>
       )}
       {movielist}
     </div>
   );
 };

export default HomeItems;
