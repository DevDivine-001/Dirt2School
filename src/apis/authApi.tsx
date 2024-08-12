import axios from "axios";

const URL: string = "http://localhost:3400/api";

export const registerUser = async (data: any) => {
  try {
    // const config: any = {
    //   "content-type": "multipart/formdata",
    // };
    return await axios.post(`${URL}/register`, data).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const signinApi = async (data: any) => {
  try {
    return await axios.post(`${URL}/signin`, data).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const verifyApi = async (token: any) => {
  try {
    return await axios
      .patch(`${URL}/${token}/student-secret-key`)
      .then((res: any) => {
        console.log("showing res: ", res);
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const verifiedApi = async (token: string) => {
  try {
    return await axios.get(`${URL}/${token}/verify-user`).then((res: any) => {
      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
  }
};
