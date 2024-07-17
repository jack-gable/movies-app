"use server";

import { MovieProp } from "@/components/MovieCard";
import MovieCard from "@/components/MovieCard";

const movieAPIKey = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

export const fetchMovies = async (page: number) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${movieAPIKey}&page=${page}`
	);

	const data = await response.json();

	return data.results.map((item: MovieProp, index: number) => (
		<MovieCard key={item.id} movie={item} index={index} />
	));
};
