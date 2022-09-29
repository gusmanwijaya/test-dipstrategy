import callApi from '../../configs';
import {REACT_APP_API_HOST} from '@env';

const ROOT_API = REACT_APP_API_HOST;

export async function getMovies(page) {
  const url = `${ROOT_API}/discover/movie?page=${page}`;
  return callApi({url, method: 'GET'});
}

export async function getDetailMovie(id) {
  const url = `${ROOT_API}/movie/${id}`;
  return callApi({url, method: 'GET'});
}
