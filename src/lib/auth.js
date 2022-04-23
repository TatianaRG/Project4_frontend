export function getLoggedInUserId() {
  const token = sessionStorage.getItem('token');
  if (!token) return false; //safety in case there's no token

  const userObject = JSON.parse(window.atob(token.split('.')[1]));
  return userObject.sub;
}
