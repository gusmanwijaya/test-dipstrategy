import axios from 'axios';
import {REACT_APP_API_KEY} from '@env';

export default async function callApi({url, method}) {
  const response = await axios({
    url,
    method,
    params: {
      api_key: REACT_APP_API_KEY,
    },
  }).catch(error => error.response);

  return response;
}
