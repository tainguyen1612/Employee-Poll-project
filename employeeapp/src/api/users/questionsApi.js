import axiosClient from "./axiosClient";
import { mainURL } from "../configApi";
const questionsApi = {
    getQuestionAll: () => {
        const url = `${mainURL}/questions`;
        return axiosClient.get(url);
    },

    getQuestionDetail: (id) => {
        const url = `${mainURL}/questions?id=${id}`;
        return axiosClient.get(url);
    },
};

export default questionsApi;
