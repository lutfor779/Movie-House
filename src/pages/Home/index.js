import Icon, { FrownOutlined, HeartOutlined } from "@ant-design/icons";
import { Col, Image, message, notification, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeContent from "../../components/homeContent";
import HomeLayout from "../../components/layout";
import MyPlaylists from "../../components/myPlaylists";
import useAuth from "../../hooks/useAuth";
import useData from "../../hooks/useData";

const Home = () => {
	const { movieData, myPlayList, alreadyAdded, setAlreadyAdded } = useData();
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
			if (myPlayList) {
				const result = myPlayList.find(
					(item) => item.Title === movieData.Title
				);

				if (result) {
					setAlreadyAdded(true);
				} else {
					setAlreadyAdded(false);
				}
			}
		} else {
			setAlreadyAdded(false);
		}
	}, [movieData, user.email]);

	const handlePlaylist = () => {
		axios
			.post(
				"https://boiling-springs-44952.herokuapp.com/movie_house_playLists",
				{
					...data,
					email: user.email,
				}
			)
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

	const HeartSvg = () => (
		<svg
			width="1em"
			height="1em"
			fill="currentColor"
			viewBox="0 0 1024 1024"
		>
			<path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
		</svg>
	);

	const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

	return (
		<HomeLayout>
			{/* search data */}
			{data && (
				<Row gutter={[16, 16]} justify="center" className="mt-5">
					<Col xs={24} sm={20} md={10} lg={8} xl={6}>
						<Image src={data.Poster} preview={false} />
					</Col>

					<Col
						xs={24}
						sm={20}
						md={14}
						lg={16}
						xl={18}
						className="text-white"
					>
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
							// <HeartFilled className="text-2xl text-red-500" />
							<HeartIcon
								style={{ color: "hotpink" }}
								className="text-2xl"
							/>
						) : (
							<HeartOutlined
								className="text-2xl"
								onClick={handlePlaylist}
							/>
						)}
					</Col>
				</Row>
			)}
			{/* playlists */}
			<HomeContent />
			<MyPlaylists />
		</HomeLayout>
	);
};

export default Home;
