import { useEffect, useState } from "react";
export const useMediaQueryScreen = (query) => {
    const [matches, setMatches] = useState(undefined);
    useEffect(() => {
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
//# sourceMappingURL=use-media-query.js.map