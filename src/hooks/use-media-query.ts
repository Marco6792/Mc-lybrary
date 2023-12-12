import { useEffect, useState } from "react";

export const useMediaQueryScreen = <T>(query: string): boolean | undefined => {
	const [matches, setMatches] = useState<boolean | undefined>(undefined);

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
