import { Empty, Image } from "antd";
import React from "react";
import Slider from "react-slick";
import useData from "../hooks/useData";

const MyPlaylists = () => {
	const { myPlayList } = useData();

	let show = 0;
	if (myPlayList) {
		if (myPlayList.length === 1) {
			show = 1;
		} else if (myPlayList.length === 2) {
			show = 2;
		} else if (myPlayList.length === 3) {
			show = 3;
		} else {
			show = 4;
		}
	}

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: show > 4 ? 4 : show,
		slidesToScroll: 1,
		autoplay: true,
		swipeToSlide: true,
		speed: 3000,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: show > 4 ? 4 : show,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: show > 3 ? 3 : show,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: show > 2 ? 2 : show,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="pt-5">
			<h1 id="myPlaylist">My Playlist</h1>
			<div className="my-5">
				{myPlayList.length > 0 ? (
					<Slider {...settings}>
						{myPlayList.map((item) => (
							<div key={item._id}>
								<Image
									src={item.Poster}
									height={350}
									preview={false}
								/>
							</div>
						))}
					</Slider>
				) : (
					<Empty />
				)}
			</div>
		</div>
	);
};

export default MyPlaylists;
