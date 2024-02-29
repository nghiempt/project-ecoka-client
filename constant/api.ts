export const HOST = `${process.env.BASE_URL}api/v1`;

export const API = {
  GET_ALL_PRODUCT: `${HOST}/product/get-all`,
  GET_ALL_CATEGORY: `${HOST}/category/get-all`,
  GET_ALL_BLOG: `${HOST}/blog/get-all`,
  SIGN_IN: `${HOST}/auth/sign-in`,
  SIGN_UP: `${HOST}/auth/sign-up`,
};
