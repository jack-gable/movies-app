import { fetchTopRatedMovies } from "../actions";
import Image from "next/image";
import LoadMoreTopRated from "@/components/LoadMoreTopRated";

async function TopRated() {
	const data = await fetchTopRatedMovies(1);

	if (!data) {
		return (
			<div className="flex justify-center items-center w-full">
				<Image
					src="./spinner.svg"
					alt="spinner"
					width={56}
					height={56}
					className="object-contain"
				/>
				<p className="text-white text-2xl">Loading movies...</p>
			</div>
		);
	}

	return (
		<main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
			<div className="flex justify-between items-center">
				<h2 className="text-3xl text-white font-bold">
					Explore Top Rated Movies
				</h2>
			</div>

			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
			<LoadMoreTopRated />
		</main>
	);
}

export default TopRated;
