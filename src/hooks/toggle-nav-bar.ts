import { useReducer } from "react";

type ItoggleState = {
	toggle: boolean;
};
const initState: ItoggleState = {
	toggle: false,
};

const enum REDUCER_ACTION_TYPE {
	TOGGLENAV,
}

type ReducerAction = {
	type: REDUCER_ACTION_TYPE;
	payload?: string;
};

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.TOGGLENAV:
			return { ...state, toggle: !state.toggle };
		default:
			throw new Error();
	}
};

type StateType = typeof initState;

export const navState = <T>(initState: StateType) => {
	const [state, dispatch] = useReducer(reducer, initState);
	const handleToggleNav = () => {
		dispatch({ type: REDUCER_ACTION_TYPE.TOGGLENAV });
	};

	return { state, handleToggleNav };
};
