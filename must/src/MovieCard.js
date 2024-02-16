import React from "react";
import Rating from "./Rating";


const MovieCard = (props) => {
    return (
        <div className="card">
            <div className="poster">
                <img src={props.Poster} alt="movie" />
                
            </div>
            <div className="info">
                <p className="title">{props.Title}</p>
                <p className="year">{props.Year}</p>
            </div>
            <div>
                <Rating onRate={props.onRate}/>
            </div>
            

        </div>
    )
}

export default MovieCard