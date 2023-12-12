type ItoggleState = {
    toggle: boolean;
};
declare const initState: ItoggleState;
type StateType = typeof initState;
export declare const navState: <T>(initState: StateType) => {
    state: ItoggleState;
    handleToggleNav: () => void;
};
export {};
