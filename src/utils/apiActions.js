import apis from "./apis";
const apiActions = () => {
  const list = apis();

  const loginUser = (data) => {
    const loginData = {
      url: list.loginUser,
      method: "POST",
      body: data,
    };
    return loginData;
  };

  const registerUser = (data) => {
    const registerData = {
      url: list.registerUser,
      method: "POST",
      body: data,
    };
    return registerData;
  };

  const forgotPassword = (data) => {
    const forgotData = {
      url: list.forgotPAssword,
      method: "POST",
      body: data,
    };
    return forgotData;
  };

  const verifyOtp = (data) => {
    const verifydata = {
      url: list.verifyOtp,
      method: "POST",
      body: data,
    };
    return verifydata;
  };

  const updatePassword = (data) => {
    const updateData = {
      url: list.updatePassword,
      method: "POST",
      body: data,
    };
    return updateData;
  };

  const verifyAccess = (data) => {
    const verifyAccessData = {
      url: list.userVerifyAccess,
      method: "POST",
      body: data,
    };

    return verifyAccessData;
  };

  const uploadImages = (data) => {
    const formData = new FormData();

    formData.append("image", data);

    const imagesData = {
      url: list.uploadImages,
      method: "POST",
      formData: formData,
    };
    return imagesData;
  };

  const createNewProduct = (data) => {
    const createProductData = {
      url: list.createNewProduct,
      method: "POST",
      body: data,
      token: localStorage.getItem("accessToken"),
    };
    return createProductData;
  };

  const addNewCategory = (data) => {
    const categoryData = {
      url: list.addNewCategory,
      method: "POST",
      body: data,
      token: localStorage.getItem("accessToken"),
    };
    return categoryData;
  };

  const addNewBrand = (data) => {
    const brandData = {
      url: list.addNewBrand,
      method: "POST",
      body: data,
      token: localStorage.getItem("accessToken"),
    };
    return brandData;
  };

  const getAllCategory = (type) => {
    const categoryData = {
      url: list.getAllCategory + "?type=" + type,
      method: "GET",
    };
    return categoryData;
  };

  const getAllProducts = () => {
    const getAllPRoductsData = {
      url: list.getAllProducts,
      method: "GET",
      token: localStorage.getItem("accessToken"),
    };

    return getAllPRoductsData;
  };

  return {
    loginUser,
    registerUser,
    forgotPassword,
    verifyOtp,
    updatePassword,
    verifyAccess,
    uploadImages,
    createNewProduct,
    addNewCategory,
    addNewBrand,
    getAllCategory,
    getAllProducts,
  };
};

export default apiActions;
