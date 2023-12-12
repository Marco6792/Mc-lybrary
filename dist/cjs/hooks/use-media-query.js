"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQueryScreen = void 0;
const react_1 = require("react");
const useMediaQueryScreen = (query) => {
    const [matches, setMatches] = (0, react_1.useState)(undefined);
    (0, react_1.useEffect)(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        // CLean Up FUNC
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);
    return matches;
};
exports.useMediaQueryScreen = useMediaQueryScreen;
//# sourceMappingURL=use-media-query.js.map