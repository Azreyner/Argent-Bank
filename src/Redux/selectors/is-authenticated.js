export const isAuthenticated = (state) => {
  let tokenIsExpired = null;
  if (!state.token && !localStorage.getItem("token")) {
    return false;
  }

  if (state.token) {
    tokenIsExpired = isTokenExpired(state.token);
  } else {
    tokenIsExpired = isTokenExpired(localStorage.getItem("token"));
  }

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
