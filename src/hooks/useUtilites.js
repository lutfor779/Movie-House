import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useUtilites = () => {
	const { user } = useAuth();
	const [movieData, setMovieData] = useState(null);
	const [myPlayList, setMyPlayList] = useState(null);
	const [playLists, setPlayLists] = useState([]);
	const [uniquePlayLists, setUniquePlayLists] = useState([]);
	const [alreadyAdded, setAlreadyAdded] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				"https://boiling-springs-44952.herokuapp.com/movie_house_playLists"
			)
			.then((res) => {
				setPlayLists(res.data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	useEffect(() => {
		axios
			.get(
				"https://boiling-springs-44952.herokuapp.com/movie_house_playLists",
				{
					params: {
						email: user.email,
					},
				}
			)
			.then((res) => {
				setMyPlayList(res.data);
			});
	}, [myPlayList, user.email]);

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
		uniquePlayLists,
		setUniquePlayLists,
	};
};

export default useUtilites;
