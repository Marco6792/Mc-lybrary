import { useReducer } from "react";
const initState = {
    toggle: false,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 0 /* REDUCER_ACTION_TYPE.TOGGLENAV */:
            return Object.assign(Object.assign({}, state), { toggle: !state.toggle });
        default:
            throw new Error();
    }
};
export const navState = (initState) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const handleToggleNav = () => {
        dispatch({ type: 0 /* REDUCER_ACTION_TYPE.TOGGLENAV */ });
    };
    return { state, handleToggleNav };
};
//# sourceMappingURL=toggle-nav-bar.js.map