import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = process.env.REACT_APP_API_ROOT || 'https://api.arxiver.xyz';

const handleErrors = err => {
  return err;
};

const responseBody = res => res.body;

const tokenPlugin = req => {
}

const requests = {
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
};

const Publications = {
  byQuery: (query='', page=1) => {
    return requests.get(`/publications?page=${page}&search=${query}`)
  },
  byAuthor: (author='', page=1) => {
    return requests.get(`/publications?page=${page}&author=${author}`)
  },
  bySubject: (subjectKey='', page=1) => {
    return requests.get(`/publications?page=${page}&subject=${subjectKey}`)
  }
};

// const Search = {
//   find: (query) => {
//     return requests.get(`/search/${query}`)
//   }
// };

export default {
  Publications
}
