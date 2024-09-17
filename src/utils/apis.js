const apis = () => {
  const local = "http://localhost:8000/";

  const list = {
    loginUser: `${local}user/login`,
    registerUser: `${local}user/register`,
    forgotPAssword: `${local}user/forgot/password`,
    verifyOtp: `${local}user/verify/otp`,
    updatePassword: `${local}user/update/password`,
    userVerifyAccess: `${local}user/verify/access`,
    uploadImages: `${local}galary/upload`,
    createNewProduct: `${local}admin/product/add`,
    addNewCategory: `${local}admin/category/add`,
    addNewBrand: `${local}admin/brand/add`,
    getAllCategory: `${local}admin/category/list`,
    getAllBrand: `${local}admin/brand/list`,
    getAllProducts: `${local}admin/product/list`,
  };
  return list;
};

export default apis;
