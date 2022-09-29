import {GET_MOVIES, GET_DETAIL_MOVIE, ERROR_MOVIES, SET_PAGE} from './types';

const initialState = {
  page: 1,
  total_page: 1,
  movies: [],
  detail: {},
  error: {},
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.movies,
        total_page: action.total_page,
      };

    case GET_DETAIL_MOVIE:
      return {
        ...state,
        detail: action.detail,
      };

    case ERROR_MOVIES:
      return {
        ...state,
        error: action.error,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
};

export default reducers;
