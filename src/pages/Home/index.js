import { FrownOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Col, Image, message, notification, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeContent from "../../components/homeContent";
import HomeLayout from "../../components/layout";
import useAuth from "../../hooks/useAuth";
import useData from "../../hooks/useData";

const Home = () => {
	const { movieData, setMyPlayList, alreadyAdded, setAlreadyAdded } =
		useData();
	const { user } = useAuth();
	const [data, setData] = useState(null);

	useEffect(() => {
		if (movieData?.Response === "False") {
			setData(null);

			notification.open({
				message: "Movie Not Found",
				description: "Please provide the right movie name to search.",
				icon: <FrownOutlined style={{ color: "#108ee9" }} />,
			});
		} else setData(movieData);

		if (movieData?.Title) {
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
					const result = res.data.find(
						(item) => item.Title === movieData.Title
					);

					if (result) {
						setAlreadyAdded(true);
					} else {
						setAlreadyAdded(false);
					}
				});
		}
	}, [movieData, user.email]);

	const handlePlaylist = () => {
		axios
			.post("http://localhost:5000/movie_house_playLists", {
				...data,
				email: user.email,
			})
			.then((res) => {
				if (res.data.insertedId) {
					message.success("Added to playlist");
					setAlreadyAdded(true);
				} else {
					message.error("Some problem occour");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<HomeLayout>
			{data && (
				<Row gutter={[16, 16]} justify="center" className="mt-5">
					<Col xs={24} sm={20} md={10} lg={8} xl={6}>
						<Image src={data.Poster} preview={false} />
					</Col>

					<Col xs={24} sm={20} md={14} lg={16} xl={18}>
						<p>Title: {data.Title}</p>
						<p>Duration: {data.Runtime}</p>
						<p className="inline-block mr-8">
							Language: {data.Language}
						</p>
						<p className="inline-block">Country: {data.Country}</p>
						<br />
						<p className="inline-block mr-8">Gener: {data.Genre}</p>
						<p className="inline-block ">
							ImdbRating: {data.imdbRating}
						</p>
						<br />
						<p className="inline-block mr-8">
							BoxOffice: {data.BoxOffice}
						</p>
						<p className="inline-block">Awards: {data.Awards}</p>
						<br />
						<p className="inline-block mr-8">
							Director: {data.Director}
						</p>
						<p className="inline-block ">Writer: {data.Writer}</p>
						<p>Actors: {data.Actors}</p>
						<p>Description: {data.Plot}</p>

						{alreadyAdded ? (
							<HeartFilled className="text-2xl" />
						) : (
							<HeartOutlined
								className="text-2xl"
								onClick={handlePlaylist}
							/>
						)}
					</Col>
				</Row>
			)}
			<HomeContent />
		</HomeLayout>
	);
};

export default Home;
