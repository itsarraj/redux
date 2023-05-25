const initialState = 0;

const change = (state = initialState, action) => {
    switch (action.type) {
        case '+':
            return state + 1;
        case '-':
            return state + 1;
        default:
            return state;
    }
};

export default change;
