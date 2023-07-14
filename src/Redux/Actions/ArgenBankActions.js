import axios from "axios";

// Par défaut
axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

export const connexion = (email, mdp) => {
  return async (dispatch, getState) => {
    const response = await axios
      .post("/login", {
        email: email,
        password: mdp,
      })
      .then(function (response) {
        console.log("La réponse :", response);
        dispatch({
          type: "CONNEXION",
          leToken: response.data.body.token,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deconnexion = () => ({ type: "DECONNEXION" });

/* Uniquement quand la personne sera connecté */
/*export const getUserName = () => {
  return async (dispatch, getState) => {
    const response = await axios
      .post("/profile", {
        headers: {
          Authorization: "Bearer" + getState.token,
        },
      })
      .then(function (response) {
        dispatch({
          type: "GETNAME",
          lePrenom: response.data.body.firstName,
          leNom: response.data.body.lastName,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};*/

export const updateName = (prenom, nom) => {
  return async (dispatch, getState) => {
    const response = await axios
      .put("/profile", {
        firstName: prenom,
        lastName: nom,
      })
      .then(function (response) {
        dispatch({
          type: "UPDATE",
          lePrenom: prenom,
          leNom: nom,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const setBearer = (token) => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };
};

export default setBearer;
