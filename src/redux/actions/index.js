import axios from "axios";
import types from "../constants/types";
//const BASE_URL = "http://localhost:3001";

// http://localhost:3001/products GET
// http://localhost:3001/products?name=... GET
// http://localhost:3001/products/id GET
// http://localhost:3001/categories GET
// http://localhost:3001/products/addProducts POST

// Products
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/products`);
      return dispatch({
        type: types.GET_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      return dispatch({
        type: types.GET_PRODUCTS,
        payload: [],
      });
    }
  };
};

export const getProductsByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/products?name=${name}`);
      return dispatch({
        type: types.GET_PRODUCTS_BY_NAME,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductsById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      return dispatch({
        type: types.GET_PRODUCTS_BY_ID,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`/products/addProducts`, product);
      return dispatch({
        type: types.POST_PRODUCT,
        result
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProduct = (product) => {
  return async (dispatch) => {
    try {
      const result = await axios.put(`/products/update/`, product);
      return dispatch({
        type: types.UPDATE_PRODUCT,
        result
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (productID) => {
  return async (dispatch) => {
    try {
      const result = await axios.delete(`/products/delete/${productID}`);
      return dispatch({
        type: types.DELETE_PRODUCT,
        result
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// Categories
export const getCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/categories`);
      return dispatch({
        type: types.GET_CATEGORIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCategoriesByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/categories?name=${name}`);
      return dispatch({
        type: types.GET_CATEGORIES_BY_NAME,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCategoryDetails = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/categories/detail/${id}`);
      return dispatch({
        type: types.GET_CATEGORY_DETAILS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCategory = (category) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`/categories/create`, category);
      return dispatch({
        type: types.POST_CATEGORY,
        result
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCategory = (categoryID) => {
  return async (dispatch) => {
    try {
      const result = await axios.delete(`/categories/delete/${categoryID}`);
      return dispatch({
        type: types.DELETE_CATEGORY,
        result
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCategory = (category) => {
  return async (dispatch) => {
    try {
      const result = await axios.put(`/categories/update/`, category);
      return dispatch({
        type: types.UPDATE_CATEGORY,
        result
      });
    } catch (error) {
      console.log(error);
    }
  };
};


// Users
export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/user`);
      return dispatch({
        type: types.GET_USERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/user/delete/${id}`);
      return dispatch({
        type: types.DELETE_USERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/user/${id}`);
      return dispatch({
        type: types.GET_USER_BY_ID,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateUserById = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/user/update/`,user);
      return dispatch({
        type: types.UPDATE_USER_BY_ID,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};



// Orders
export const getOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/orders`);
      return dispatch({
        type: types.GET_ORDERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOrderById = (userId,orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/orders/${userId}/${orderId}`);
      return dispatch({
        type: types.GET_ORDER_BY_ID,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateOrderStateById = (info) => {
  console.log('update State data',info)
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/orders/state/`,info);
      return dispatch({
        type: types.UPDATE_ORDER_BY_ID,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }; 
};


//Review
export const getReviews = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/reviews`);
      return dispatch({
        type: types.GET_REVIEWS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const postReview = (info) => {
  console.log('review data',info)
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/reviews/addReview/`,info);
      return dispatch({
        type: types.POST_REVIEW,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }; 
};


// Filter
export const filterByCategory = (id) => {
  return {
    type: types.FILTER_BY_CATEGORY,
    payload: id,
  };
};

export const filterOrders = (state) => {
  return {
    type: types.FILTER_ORDERS,
    payload: state,
  };
};



//Cambiar estado con nombre Status
export const statusChange = () => {
  return {
    type: types.STATUS_CHANGE,
  };
};


// Order
export const orderByPrice = (payload) => {
  return {
    type: types.ORDER_BY_PRICE,
    payload,
  };
};

export const orderByRangePrice = (payload) => {
  return {
    type: types.FILTER_BY_PRICE_RANGE,
    payload,
  };
};

// Email
export const sendHelpEmail = (email) => {
  // correo de sugerencias o consultas
  return async (dispatch) => {
    try {
      await axios.post(`/email/sendHelpEmail`, email);
      return dispatch({
        type: types.SEND_HELP_EMAIL, // va de ellos a nosotros
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendRegisterEmail = (email) => {
  // correo de confirmacion de registro
  return async (dispatch) => {
    try {
      await axios.post(`/email/sendRegisterEmail`, email);
      return dispatch({
        type: types.SEND_REGISTER_EMAIL, // va de nosotros a ellos
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendPaymentEmail = (email) => {
  // correo de confirmación de la compra
  return async (dispatch) => {
    try {
      await axios.post(`/email/sendPaymentEmail`, email);
      return dispatch({
        type: types.SEND_PAYMENT_EMAIL, // va de nosotros a ellos
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendOrderDispatchEmail = (email) => {
  // correo de confirmación de despacho de la orden (esta en manos del cliente)
  return async (dispatch) => {
    try {
      await axios.post(`/email/sendOrderDispatchEmail`, email);
      return dispatch({
        type: types.SEND_PAYMENT_EMAIL, // va de nosotros a ellos
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const sendPassResetEmail = (email) => { // no es más necesario x ahora
//   // correo de restablecimiento de password
//   return async (dispatch) => {
//     try {
//       await axios.post(`/email/sendPassResetEmail`, email);
//       return dispatch({
//         type: types.SEND_PASS_RESET_EMAIL, // va de nosotros a ellos
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// Password reset
export const passwordForgot = (payload) => { // http://localhost:3001/user/forgot
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/user/forgot`, payload.email);
      return dispatch({
        type: types.PASSWORD_FORGOT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    };
  };
};

export const passwordReset = (payload) => { // http://localhost:3001/user/reset/:id/:token
  return async (dispatch) => {
    try {
      console.log('esto es payload de la action passReset: '+payload);
      const { data } = await axios.put(`/user/reset/${payload.id}/${payload.token}`, payload.password);
      return dispatch({
        type: types.PASSWORD_RESET,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    };
  };
};

// User Orders
export const getCartFromUser = (user_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/user/${user_id}`);
      const userCart = data.cart.map((elem) => ({
        ...elem,
        price: elem.price.$numberDecimal,
      }));
      return dispatch({
        type: types.GET_CART_FROM_USER,
        payload: userCart,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUserCart = async (user_id, cart) => {
    try {
      const { data } = await axios.post(`/user/updateCart/${user_id}`, {
        cart: cart,
      });
      const userCart = data.map((elem) => ({
        ...elem,
        price: elem.price.$numberDecimal,
      }));
      return userCart
    } catch (error) {
      console.log(error);
    }
  };