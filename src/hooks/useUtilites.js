import axios from "axios";
import { useEffect, useState } from "react";

const useUtilites = () => {
	const [movieData, setMovieData] = useState(null);
	const [myPlayList, setMyPlayList] = useState(null);
	const [playLists, setPlayLists] = useState([]);
	const [alreadyAdded, setAlreadyAdded] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios
			.get(
				"https://boiling-springs-44952.herokuapp.com/movie_house_playLists"
			)
			.then((res) => setPlayLists(res.data));
	}, []);

	return {
		movieData,
		setMovieData,
		loading,
		setLoading,
		myPlayList,
		setMyPlayList,
		playLists,
		setPlayLists,
		alreadyAdded,
		setAlreadyAdded,
	};
};

export default useUtilites;
