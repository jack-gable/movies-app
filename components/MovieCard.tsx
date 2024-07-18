"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import Modal from "./Modal";

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
	const [isModalOpen, setIsModalOpen] = useState(false);

	const releaseDate = new Date(movie.release_date);

	return (
		<>
			{isModalOpen && (
				<Modal handleDismiss={() => setIsModalOpen(!isModalOpen)}>
					<div className="flex flex-col md:flex-row gap-6 items-center justify-between">
						<div className="relative w-[300px] h-[47vh]">
							<Image
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt={movie.title + " poster"}
								fill
								className="rounded-xl"
							/>
						</div>
						<div className="flex flex-col gap-4 md:w-[50%]">
							<h2 className="font-bold text-black text-xl line-clamp-1">
								{movie.title}
							</h2>
							<div className="text-black">
								Released: {releaseDate.getFullYear()}
							</div>
							<div className="text-black first-letter:text-2xl first-letter:font-bold">
								{movie.overview}
							</div>
							<div className="flex gap-2">
								<Image
									src="./star.svg"
									alt="star"
									width={18}
									height={18}
									className="object-contain"
								/>
								<p className="text-base font-bold text-[#FFAD49]">
									{movie.vote_average.toFixed(1)}
								</p>
							</div>
						</div>
					</div>
				</Modal>
			)}

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
					</div>
					<div className="flex flex-row gap-2 items-center justify-between">
						<div className="flex gap-2">
							<Image
								src="./star.svg"
								alt="star"
								width={18}
								height={18}
								className="object-contain"
							/>
							<p className="text-base font-bold text-[#FFAD49]">
								{movie.vote_average.toFixed(1)}
							</p>
						</div>
						<button
							className="flex gap-2"
							onClick={() => setIsModalOpen(!isModalOpen)}
						>
							<p className="text-sm text-white">Learn More</p>
							<Image
								src="./episodes.svg"
								alt="episodes"
								width={20}
								height={20}
								className="object-contain"
							/>
						</button>
					</div>
				</div>
			</MotionDiv>
		</>
	);
}

export default MovieCard;
