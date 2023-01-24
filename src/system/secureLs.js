/* eslint-disable consistent-return */
// import SecureLS from 'secure-ls';
// import Keys from './keys';

import keys from './constants/keys';

const ls = {
  set: (key, value) => {
    localStorage.setItem(key, value);
  },
  get: (key) => localStorage.getItem(key),
  remove: (key) => localStorage.removeItem(key),
};

const set = (key, value) => {
  // const ls = new SecureLS({ encodingType: 'aes' });
  ls.set(key, value);
};

const get = (key) => ls.get(key);
// if (Keys.ISSERVER) return;
// const ls = new SecureLS({ encodingType: 'aes' });

const remove = (key) => ls.remove(key);
// if (Keys.ISSERVER) return;
// const ls = new SecureLS({ encodingType: 'aes' });

const removeToken = () => ls.remove(`${keys.APP_ACCESS_TOKEN}`);
// if (Keys.ISSERVER) return;
// const ls = new SecureLS({ encodingType: 'aes' });

const setToken = (value) => {
  // if (Keys.ISSERVER) return;
  // const ls = new SecureLS({ encodingType: 'aes' });
  //
  ls.set(`${keys.APP_ACCESS_TOKEN}`, value);
};

const getToken = () => {
  // if (Keys.ISSERVER) return;
  // const ls = new SecureLS({ encodingType: 'aes' });
  try {
    return ls.get(`${keys.APP_ACCESS_TOKEN}`) || null;
  } catch (error) {
    return null;
  }
};

const Secure = {
  set,
  setToken,
  get,
  getToken,
  remove,
  removeToken,
};

export default Secure;
