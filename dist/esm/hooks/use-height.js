import { useEffect, useState } from "react";
export const useScrollHeight = (query, height) => {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
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
//# sourceMappingURL=use-height.js.map