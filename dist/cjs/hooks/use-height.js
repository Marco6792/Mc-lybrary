"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollHeight = void 0;
const react_1 = require("react");
const useScrollHeight = (query, height) => {
    const [matches, setMatches] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > height) {
                setMatches(true);
            }
            else {
                setMatches(false);
            }
            return { handleScroll };
        };
        window.addEventListener("scroll", handleScroll);
        // clean-up function
        return () => window.removeEventListener("scroll", handleScroll);
    }, [matches, query]);
    return { matches };
};
exports.useScrollHeight = useScrollHeight;
//# sourceMappingURL=use-height.js.map