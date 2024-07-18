"use client";
import { fetchUpcomingMovies } from "@/app/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import MovieCard from "./MovieCard";

let page = 2;

export type MovieCard = JSX.Element;

function LoadMoreUpcoming() {
	const { ref, inView } = useInView();
	const [data, setData] = useState<MovieCard[]>([]);

	useEffect(() => {
		if (inView) {
			fetchUpcomingMovies(page).then((res) => {
				setData([...data, ...res]);
				page++;
			});
		}
	}, [inView, data]);

	return (
		<>
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
			<section className="flex justify-center items-center w-full">
				<div ref={ref}>
					<Image
						src="./spinner.svg"
						alt="spinner"
						width={56}
						height={56}
						className="object-contain"
					/>
				</div>
			</section>
		</>
	);
}

export default LoadMoreUpcoming;
