import { invokeApi } from "../../../utilis/InvokeApi";

export const ProductsbyCategory = (id) => {
  const reqobj = {
    path: `/product/get-by-category/${id}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  };
  return invokeApi(reqobj);
};
export const CategoryData = () => {
  const reqobj = {
    path: "/category/get?search=&page=1&limit=10",
    method: "GET",
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  };
  return invokeApi(reqobj);
};

export const CategoryLists = () => {
  const reqobj = {
    path: "/product/get?search=&page=1&limit=10",
    method: "GET",
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  };
  return invokeApi(reqobj);
};

export const CategoryDetails = (id) => {
  const reqobj = {
    path: `/product/get/${id}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  };
  return invokeApi(reqobj);
};

export const sendData = (payload) => {
  const reqobj = {
    path: "/product/add-to-cart",
    method: "POST",
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    postData: payload,
  };
  return invokeApi(reqobj);
};

export const CartProducts = (data) => {
  const reqobj = {
    path: `/product/show-cart-item`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    postData: data,
  };
  return invokeApi(reqobj);
};

export const RemoveCartProducts = (id) => {
  const reqobj = {
    path: `/product/remove-cart-item/${id}`,
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  };
  return invokeApi(reqobj);
};

export const UpdateCartQuantity = (id, data) => {
  const reqobj = {
    path: `/product/update-cart-item/${id}`,
    method: "PATCH",
    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    postData: data,
  };
  return invokeApi(reqobj);
};

export const CheckoutData = (data ) => {
  const reqobj = {
    path: `/product/checkout`,
    method: "POST",
    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    postData: data,
  };
  return invokeApi(reqobj);
};

