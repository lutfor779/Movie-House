import { useState } from "react";

const useUtilites = () => {
	const [movieData, setMovieData] = useState(null);

	return {
		movieData,
		setMovieData,
	};
};

export default useUtilites;
