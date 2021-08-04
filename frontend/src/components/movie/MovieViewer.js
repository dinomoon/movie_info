import React from 'react';

const MovieViewer = ({ movie }) => {
  const { title, rating, pubDate, director, actor, image } = movie;
  return (
    <>
      <div className="movie-wrapper">
        <img src={image} alt="" />
        <div className="movie-info">
          <h2>{title}</h2>
          <div>{rating}</div>
          <div>{pubDate}</div>
          <div>{director}</div>
          <div>{actor}</div>
        </div>
      </div>
      <form>
        <input type="text" placeholder="댓글" />
        <button type="submit">등록</button>
      </form>
      <ul>
        <li>댓글1</li>
      </ul>
    </>
  );
};

export default MovieViewer;
