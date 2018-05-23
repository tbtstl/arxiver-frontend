import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import authStore from './stores/authStore';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = process.env.REACT_APP_API_ROOT || 'https://api.arxiver.xyz'

const encode = encodeURIComponent;

const handleErrors = err => {
  if(err && err.response && err.response.status === 401){
    authStore.logout();
  }
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

const Auth = {
  googleCallback: code => {
    requests.post('/auth/google_oauth2/callback?code=${code}')
  },
  googleRedirect: () => {
    return `${API_ROOT}/auth/google_oauth2/`;
  },
  profile: () => {
    requests.get('/profile')
  },
  login: (resp) => {
    requests.post(`/token?code=${resp.code}`)
      .then((resp) => {console.log(resp)});
  }
};

export default {
  Auth
}
