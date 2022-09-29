import {GET_MOVIES, GET_DETAIL_MOVIE, ERROR_MOVIES, SET_PAGE} from './types';
import {getMovies, getDetailMovie} from '../../services/movies';
import {setLoading} from '../loading/actions';

const setGetMovies = (movies, total_page) => {
  return {
    type: GET_MOVIES,
    movies,
    total_page,
  };
};

const setDetailMovie = detail => {
  return {
    type: GET_DETAIL_MOVIE,
    detail,
  };
};

const setErrorMovies = error => {
  return {
    type: ERROR_MOVIES,
    error,
  };
};

const setPage = page => {
  return {
    type: SET_PAGE,
    page,
  };
};

const fetchMovies = () => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const params = {
      page: getState().moviesReducers?.page || 1,
    };

    const response = await getMovies(params?.page);

    if (response?.data?.total_results > 0) {
      dispatch(setLoading(false));
      dispatch(
        setGetMovies(response?.data?.results, response?.data?.total_pages),
      );
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorMovies(response));
    }
  };
};

const fetchDetailMovie = id => {
  return async dispatch => {
    dispatch(setLoading(true));

    const response = await getDetailMovie(id);
    if (response?.data) {
      dispatch(setLoading(false));
      dispatch(setDetailMovie(response?.data));
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorMovies(response));
    }
  };
};

export {fetchMovies, fetchDetailMovie, setPage};
