import Secure from './secureLs';

export function getUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
export function getHeaders() {
  return {
    headers: { Authorization: `Bearer ${Secure.getToken()}` },
  };
}
