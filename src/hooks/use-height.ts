import { useEffect, useState } from "react";

export const useScrollHeight = <T>(query: T, height: number) => {
	const [matches, setMatches] = useState<boolean>(false);
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;
			if (scrollPosition > height) {
				setMatches(true);
			} else {
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
