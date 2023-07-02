const initialState = {
    data: [],
    item: {},
};

const questionsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        case "GET_QUESTIONS_SUCCESS": {
            return {
                ...state,
                data: payload,
            };
        }
        case "GET_DETAIL_QUESTION": {
            return {
                ...state,
                item: payload,
            };
        }
        default:
            return state;
    }
};

export default questionsReducer;
