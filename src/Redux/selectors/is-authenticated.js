export const isAuthenticated = (state) => {
  if (!state.token) {
    return false;
  }
  const tokenIsExpired = isTokenExpired(state.token);
  return !tokenIsExpired;
};

export function isTokenExpired(token) {
  const [error, decodedJwt] = parseJwt(token);
  if (error) {
    return;
  }
  return decodedJwt.exp * 1000 < Date.now();
}

function parseJwt(token) {
  try {
    return [null, JSON.parse(atob(token.split(".")[1]))];
  } catch (e) {
    return [e, null];
  }
}
