import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
import useData from "../hooks/useData";

const HomeContent = () => {
	const { playLists } = useData();
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
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
		<div className="my-8">
			<h1>Some Collections</h1>
			<Slider {...settings}>
				{playLists.map((item) => (
					<div key={item._id}>
						<Image src={item.Poster} height={350} preview={false} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default HomeContent;
