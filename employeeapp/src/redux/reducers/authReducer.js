import toast from "react-hot-toast";

const initialState = {
    name: "",
    avatarURL: "",
    answers: {},
    email: "",
    password: "",
    questions: ["", ""],
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "LOGIN_SUCCESS": {
            localStorage.setItem("user", JSON.stringify({ isLogin: true }));
            return {
                ...state,
                ...payload[0],
            };
        }

        case "LOGIN_FAIL": {
            toast.error(payload);
            return {
                ...state,
                error: payload,
            };
        }

        case "LOGOUT": {
            localStorage.clear();
            return {
                ...state,
                name: "",
                avatarURL: "",
                answers: {},
                email: "",
                password: "",
                questions: ["", ""],
            };
        }

        default:
            return {
                ...state,
            };
    }
};

export default authReducer;
