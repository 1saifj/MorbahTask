import * as types from "./actionType";
import axios from "axios";

const getInformations = (users) => ({
  type: types.GET_INFORMATIONS,
  payload: users,
});

const infoDeleted = () => ({
  type: types.DELETE_INFO,
});

const infoAdded = () => ({
  type: types.ADD_INFO,
});

const infoUpdated = () => ({
  type: types.UPDATE_INFO,
});

const getInfoById = (user) => ({
  type: types.GET_INFO,
  payload: user,
});

const leaveAdded = () => ({
  type: types.ADD_LEAVE,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const getAddedUsers = (addedUser) => ({
  type: types.GET_ADDED_USERS,
  payload: addedUser,
});

const addedUsersDeleted = () => ({
  type: types.DELETE_ADDED_USER,
});

//! Product Funcs
const getProductAdded = (addedProduct) => ({
  type: types.GET_PRODUCT_ADDED,
  payload: addedProduct,
});

const addedProductF = () => ({
  type: types.ADD_PRODUCT,
});

const productDeleted = () => ({
  type: types.PRODUCT_DELETED,
});
//! END PRODUCT FUNS

export const loadInformations = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/user`)
      .then((resp) => {
        dispatch(getInformations(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteInfo = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/user/${id}`)
      .then(() => {
        dispatch(infoDeleted());
        dispatch(loadInformations());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addInfo = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}/user`, user)
      .then(() => {
        dispatch(infoAdded());
        dispatch(loadInformations());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateInfo = (user) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/user/${user.id}`, user)
      .then(() => {
        dispatch(infoUpdated());
        dispatch(loadInformations());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getInfo = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/user/${id}`)
      .then((resp) => {
        dispatch(getInfoById(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loadAddedUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/addedUsers`)
      .then((resp) => {
        dispatch(getAddedUsers(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addLeave = (leave) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}/leaves`, leave)
      .then(() => {
        dispatch(leaveAdded());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addUser = (addedUser) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}/addedUsers`, addedUser)
      .then(() => {
        dispatch(userAdded());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteAddedUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/addedUsers/${id}`)
      .then(() => {
        dispatch(addedUsersDeleted());
        dispatch(getAddedUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//! PRODUCT

export const addProduct = (addedProduct) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}/addedProduct`, addedProduct)
      .then(() => {
        dispatch(addedProductF());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteAddedProduct = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/addedProduct/${id}`)
      .then(() => {
        dispatch(productDeleted());
        dispatch(getProductAdded());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loadProduct = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/addedProduct`)
      .then((resp) => {
        dispatch(getProductAdded(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
