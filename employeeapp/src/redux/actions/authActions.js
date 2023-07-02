import userAuthApi from "../../api/users/authApi";
import toast from "react-hot-toast";

export const setAccessToken = (token) => ({
    type: "ACCESS_TOKEN",
    payload: token,
});

export const loginAction = (data) => async (dispatch) => {
    try {
        const response = await userAuthApi.login();
        const isSuccess = response.some(
            (el) => el.email == data.email && el.password == data.password
        );
        console.log(
            response.filter(
                (el) => el.email == data.email && el.password == data.password
            )
        );
        if (isSuccess) {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.filter(
                    (el) =>
                        el.email == data.email && el.password == data.password
                ),
            });
        } else {
            dispatch({
                type: "LOGIN_FAIL",
                payload: "Login fail",
            });
        }
    } catch (error) {
        dispatch({
            type: "LOGIN_FAIL",
            payload: "Login fail",
        });
    }
};

// export const getUserInfoAction = () => async (dispatch, getState) => {
//     try {
//         let { accessToken } = getState().auth;
//         const response = await userAuthApi.getUserInfo(accessToken);
//         if (!response.error) {
//             dispatch({
//                 type: "GET_USER_INFO_SUCCESS",
//                 payload: response,
//             });
//         } else {
//             dispatch({
//                 type: "GET_USER_INFO_FAIL",
//                 payload: response.error,
//             });
//         }
//     } catch (error) {
//         dispatch({
//             type: "GET_USER_INFO_FAIL",
//             payload: error.message,
//         });
//     }
// };

export const logoutAction = () => async (dispatch) => {
    dispatch({
        type: "LOGOUT",
    });
};
