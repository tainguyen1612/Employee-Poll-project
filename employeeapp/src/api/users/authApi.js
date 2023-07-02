import axiosClient from "./axiosClient";

const userAuthApi = {
    login: () => {
        const url = "/users";
        return axiosClient.get(url);
    },
};

export default userAuthApi;
