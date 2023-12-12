"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navState = void 0;
const react_1 = require("react");
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
const navState = (initState) => {
    const [state, dispatch] = (0, react_1.useReducer)(reducer, initState);
    const handleToggleNav = () => {
        dispatch({ type: 0 /* REDUCER_ACTION_TYPE.TOGGLENAV */ });
    };
    return { state, handleToggleNav };
};
exports.navState = navState;
//# sourceMappingURL=toggle-nav-bar.js.map