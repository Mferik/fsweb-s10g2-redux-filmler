export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (title, director, metascore, genre, description) => {
  return {
    type: ADD_MOVIE,

    payload1: title,
    payload2: director,
    payload3: metascore,
    payload4: genre,
    payload5: description,
  };
};
