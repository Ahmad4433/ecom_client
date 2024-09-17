import toast from "react-hot-toast";
const httpAction = (data) => async () => {
  try {
    const response = await fetch(data.url, {
      method: data.method ? data.method : "GET",
      body: data.formData
        ? data.formData
        : data.body
        ? JSON.stringify(data.body)
        : null,

      headers: data.formData
        ? {}
        : {
            "Content-Type": "application/json",
            Authorization: data.token && `Bearer ${data.token}`,
          },
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData?.message);
    }

    return resData;
  } catch (error) {
    toast.error(error.message);
  }
};

export default httpAction;
