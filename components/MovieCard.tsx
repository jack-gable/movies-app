import React from "react";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface MovieProp {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface Prop {
	movie: MovieProp;
	index: number;
}

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

function MovieCard({ movie, index }: Prop) {
	return (
		<MotionDiv
			variants={variants}
			initial="hidden"
			animate="visible"
			transition={{
				delay: index * 0.25,
				ease: "easeInOut",
				duration: 0.5,
			}}
			viewport={{ amount: 0 }}
			className="max-w-sm rounded relative w-full"
		>
			<div className="relative w-full h-[37vh]">
				<Image
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title + " poster"}
					fill
					className="rounded-xl"
				/>
			</div>
			<div className="py-4 flex flex-col gap-3">
				<div className="flex justify-between items-center gap-1">
					<h2 className="font-bold text-white text-xl line-clamp-1 w-full">
						{movie.title}
					</h2>
					{/* <div className="py-1 px-2 bg-[#161921] rounded-sm">
						<p className="text-white text-sm font-bold capitalize">
							{movie.overview}
						</p>
					</div> */}
				</div>
				<div className="flex flex-row gap-2 items-center">
					<Image
						src="./star.svg"
						alt="star"
						width={18}
						height={18}
						className="object-contain"
					/>
					<p className="text-base font-bold text-[#FFAD49]">
						{movie.vote_average}
					</p>
				</div>
			</div>
		</MotionDiv>
	);
}

export default MovieCard;
