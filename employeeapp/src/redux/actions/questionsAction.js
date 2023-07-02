import toast from "react-hot-toast";
import questionsApi from "../../api/users/questionsApi";

export const getAllQuestion = () => async (dispatch) => {
    try {
        const response = await questionsApi.getQuestionAll();
        //console.log(response);
        dispatch({
            type: "GET_QUESTIONS_SUCCESS",
            payload: response,
        });
    } catch (error) {
        toast.error(error);
    }
};

export const getDetailQuestion = (id) => async (dispatch) => {
    try {
        const response = await questionsApi.getQuestionDetail(id);
        console.log(response);
        dispatch({
            type: "GET_DETAIL_QUESTION",
            payload: response,
        });
    } catch (error) {
        toast.error(error);
    }
};
